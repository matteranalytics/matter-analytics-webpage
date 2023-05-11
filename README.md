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

## Type-checking

Run this command before deploying your project, and fix any errors that arise.
The unmodified `src/custom/template.database.ts` comes handy when comparing with the updated `src/custom/database.ts`.

Perform type checking to ensure that `src/custom/database.ts` aligns with `src/custom/database.d.ts`:

```bash
npm run check
```

## Building

Run this command before deploying your project, and fix any errors that arise.

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

### Importing a Git repo from GitHub

1. Sign in to [vercel.com](https://vercel.com/)  with your GitHub account.
2. Go to the [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click `Add New` and choose `Project`
4. In the `Import Git repository` section, you'll see your imported Git repositories. To import a new one, click `Adjust GitHub App Permissions →` next to `Missing Git repository?` question.
5. In the popup, click `Configure` next to your GitHub username
6. _Optional_ If you enabled 2FA on GitHub, you'll need to confirm it for the Vercel GitHub Apps
7. Enlarge the window, and you'll see it landed on GitHub. Scroll down to `Repository access`, select your portfolio source code repository, and click `Save`. This allows Vercel to access your repository and create a static site from it.
8. The popup will be closed automatically, and you'll see the authorized repository in the Vercel Dashboard. Click `Import` next to it.
9. Leave the settings as they are and click the wide `Deploy` button.
10. If you see "Congratulations," your site is live!
11. Click `Continue with Dashboard` to set the domain for the site.
12. Click `Settings` at the top, then `Domains` on the left panel.
13. Add your domain name if you have one, or edit the name provided by Vercel.
14. Visit your site on the domain 🎉

## Customization

Three key areas for customization include:

- `package.json` The core of every Node.js application.
- `static/` A directory containing static assets, such as images and `favicon.ico`.
- `src/custom/` A directory for content and style customizations, including:
  - colors
  - fonts
  - icons
  - database (well,... :smiley:)

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

### Database

There are three files related to the well-structured content of your site:

- `src/custom/template.database.ts`: This file is a guide for showing data on your website. Don't delete or change it. Keep it for future reference.
- `src/custom/database.ts`: Initially, this file is a copy of the template. You can change this file with your own information, and it will show on your website.
- `src/custom/database.d.ts`: This file explains the structure and types of data used in your `database.ts` ( and `template.database.ts`) file. It makes sure the data in `database.ts` is correct and adheres to the expected format, which helps prevent errors.

#### Search Engine Optimization

Each page (`page.about`, `page.resume`, `page.portfolio`) has an `seo` section that will be rendered in the `<head>` of your site.
Each project (`page.portfolio.projects[]`) has a dynamically generated piece of SEO related `<head>` based on the following rules:

| Meta              | Content                                                            |
| ----------------- | ------------------------------------------------------------------ |
| `seo.title`       | `sidebar.name · page.portfolio.projects[].title`                   |
| `seo.description` | `page.portfolio.projects[].description`                            |
| `seo.keywords`    | `page.portfolio.seo.keywords, page.portfolio.projects[].category}` |

Example `<head>` for the Resume page:

```html
<head>
  <title>Richard Hanrick · Resume</title>
  <meta name="description" content="Richard Hanrick's portfolio: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.">
  <meta name="keywords" content="freelancer, data science, analytics">
</head>
```

Example `<head>` for a Project page:

```html
<head>
  <title>Richard Hanrick · Finance</title>
  <meta name="description" content="A short (max. 155 charaters) description which can be nicely appear in SEO">
  <meta name="keywords" content="freelancer, data science, analytics, Statistics">
</head>
```
