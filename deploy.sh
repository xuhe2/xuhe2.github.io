#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Switching to master branch..."
git checkout master

echo "Cleaning old files..."
rm -rf * .[!.]* 2>/dev/null || true

echo "Copying dist files..."
cp -r dist/* .

echo "Committing..."
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to master..."
git push origin master

echo "Switching back to dev..."
git checkout dev

echo "Done!"
