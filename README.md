# Portfolio

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

Upon executing this step, a `node_modules` folder is generated within your project's root directory, housing all installed packages and their dependencies. Node.js subsequently locates and loads these packages as needed by your application.

In case of installation issues or dependency reinstallation, simply delete the `node_modules` folder and install the dependencies again.

## Developing

Once you've installed the dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Press `Ctrl + D` to terminate the development server.

When you run `npm run dev` for the first time, it creates the `.svelte-kit` folder, which the development server uses for storing build artifacts and cache. As you continue working on your project, the development server relies on this folder for a faster development experience.

If unexpected issues arise during development, you can delete the `.svelte-kit` folder to remove the existing cache and build artifacts. Once deleted, restart the development server, which will generate a new `.svelte-kit` folder with a fresh cache, potentially resolving any problems you encountered.

## Building

To create a production version of your app:

```bash
npm run build
```

A known warning related to older SvelteKit versions concerns the [adapter-auto package](https://vercel.com/docs/beginner-sveltekit/adapters#adapter-types). The warning reads: "Unable to detect a supported production environment. Visit <https://kit.svelte.dev/docs/adapters> to learn how to configure your app for your chosen platform."

⚠️ Any other warning or error need to be addressed first before deploying.

To preview the production build:

```bash
npm run preview
```

## Deploying

The site is accessible at [dalum.vercel.app](https://dalum.vercel.app/)

## Customization

Three key areas for customization include:

- `package.json` The core of every Node.js application.
- `static/` A directory containing static assets, such as images and `favicon.ico`.
- `src/custom` A directory for content and style customizations, including:
  - colors
  - fonts
  - icons
  - personal structured content

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

5. Uninstall the previous font family:

    ```bash
    npm uninstall @fontsource/inter
    ```

    Once again, you will see the changes reflected in the `package.json` file.

6. Finally restart the development server to view the updated font on your website.

### Icons

### Personal content
