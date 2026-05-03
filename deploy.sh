#!/bin/bash
set -euo pipefail

SOURCE_BRANCH="dev"
TARGET_BRANCH="master"
BUILD_DIR="dist"
BUILD_TMP="$(mktemp -d)"
DEPLOY_WORKTREE="$(mktemp -d)"
DRY_RUN="${DEPLOY_DRY_RUN:-0}"

cleanup() {
  rm -rf "$BUILD_TMP"
  git worktree remove --force "$DEPLOY_WORKTREE" >/dev/null 2>&1 || rm -rf "$DEPLOY_WORKTREE"
}

trap cleanup EXIT

CURRENT_BRANCH="$(git branch --show-current)"

if [ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo "Please run this script from the $SOURCE_BRANCH branch."
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Run: nvm use 22"
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -lt 22 ]; then
  echo "Node.js 22+ is required. Run: nvm use 22"
  exit 1
fi

echo "Building..."
npm run build

if [ ! -d "$BUILD_DIR" ] || [ -z "$(find "$BUILD_DIR" -mindepth 1 -maxdepth 1 -print -quit)" ]; then
  echo "Build output is empty: $BUILD_DIR"
  exit 1
fi

echo "Staging build output..."
cp -R "$BUILD_DIR"/. "$BUILD_TMP"/

echo "Preparing $TARGET_BRANCH worktree..."
git fetch origin "$TARGET_BRANCH"
rm -rf "$DEPLOY_WORKTREE"
git worktree add -B "$TARGET_BRANCH" "$DEPLOY_WORKTREE" "origin/$TARGET_BRANCH"

echo "Cleaning old deployed files..."
find "$DEPLOY_WORKTREE" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +

echo "Copying build files..."
cp -R "$BUILD_TMP"/. "$DEPLOY_WORKTREE"/

echo "Committing deployment..."
(
  cd "$DEPLOY_WORKTREE"
  git add -A

  if git diff --cached --quiet; then
    echo "No deployment changes to commit."
    exit 0
  fi

  if [ "$DRY_RUN" = "1" ]; then
    echo "DEPLOY_DRY_RUN=1: skipping commit and push."
    git status --short
    exit 0
  fi

  git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin "$TARGET_BRANCH"
)

echo "Done!"
