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

This project uses Node.js's built-in package manager [npm](https://www.npmjs.com/). There are other package managers, we will warn you when you may encounter one of them.

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

Press `Ctrl + D` to terminate the development server.

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

## Customization

Three key areas for customization include:

- `package.json` The core of every Node.js application.
- `static/` A directory containing static assets, such as images and favicon.ico.
- `src/custom` A directory for content and style customizations, including:
  - colors
  - fonts
  - icons
  - personal content

### Colors

### Fonts

1. Terminate the development server if it is running.

2. Choose a font family from [fontsource](https://fontsource.org/), such as [Open Sans](https://fontsource.org/fonts/open-sans).
3. Execute the installation script at the root of the repository (note that the official instructions use the `yarn` package manager, which is not advised here):

    ```bash
    npm install @fontsource/open-sans
    ```

    After running this script, you will see the changes in the `package.json` file.

4. Modify `src/custom/fonts.css` in two locations to resemble the following code:

    ```css
    import "@fontsource/open-sans";

    :root {
      --ff-custom: "Open Sans";
    }
    ```

5. Uninstall the previous font source:

    ```bash
    npm uninstall @fontsource/inter
    ```

    Once again, you will see the changes reflected in the `package.json` file.

6. Finally restart the development server to view the updated font family on your website.

### Icons

### Personal content
