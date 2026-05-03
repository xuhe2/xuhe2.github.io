# xuhe2.github.io

Personal homepage built with [Astro](https://astro.build/) and deployed as a static site.

## Development

```sh
nvm use 22
npm install
npm run dev
```

## Build

```sh
nvm use 22
npm run build
```

## Deploy

```sh
nvm use 22
./deploy.sh
```

The deploy script builds the Astro site from `dev` and publishes the generated `dist` files to the `master` branch using a temporary Git worktree.

## Content

Most homepage content lives in `src/data/profile.ts`. Update that file to change the profile text, links, education, experience, research, open source, awards, skills, and footer data.
