# Portfolio Website

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Git](https://git-scm.com/downloads "Download Git")
- [Node.js 18](https://nodejs.org/en "Download Node.js") The `.nvmrc` file contains the required Node.js version.
- [VSCode](https://code.visualstudio.com/ "Download VSCode") Recommended code editor with the following extensions:
  - DavidAnson.vscode-markdownlint
  - EditorConfig.EditorConfig
  - esbenp.prettier-vscode
  - formulahendry.auto-rename-tag
  - SimonSiefke.svg-preview
  - svelte.svelte-vscode

## Installing

The `package.json` contains the required JavaScript packages which are hosted at [npm](https://www.npmjs.com/). To install these dependencies run the following script at the root of this repository:

```bash
npm install
```

## Developing

Once you've installed the dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deploying

The site is accessible at [dalum.vercel.app](https://dalum.vercel.app/)
