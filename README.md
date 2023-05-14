# Profile

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Local Workflow](#local-workflow)
  - [Installation](#installation)
  - [Development](#development)
  - [Type-checking and Linting](#type-checking-and-linting)
  - [Building](#building)
  - [Pushing Changes](#pushing-changes)
- [Automation](#automation)
  - [Continuous Integration](#continuous-integration)
  - [Continuous Delivery](#continuous-delivery)
- [Customization](#customization)
  - [Content](#content)
    - [Database](#database)
    - [Markdown](#markdown)
  - [Static Assets](#static-assets)
  - [Styling](#styling)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Icons](#icons)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Git](https://git-scm.com/downloads "Download Git")
- [Node.js](https://nodejs.org/en "Download Node.js") The `.nvmrc` file contains the required Node.js version.
- [VSCode](https://code.visualstudio.com/ "Download VSCode") Recommended code editor with the following extensions:
  - DavidAnson.vscode-markdownlint
  - EditorConfig.EditorConfig
  - esbenp.prettier-vscode
  - formulahendry.auto-rename-tag
  - github.vscode-github-actions
  - SimonSiefke.svg-preview
  - svelte.svelte-vscode

## Setup

Clone this repository.

## Local Workflow

Key steps of the profile creation which take place locally on your computer.

### Installation

This repo uses Node.js's built-in package manager command-line tool [npm](https://docs.npmjs.com/cli/v9/commands). There are other package managers, we will warn you when you may encounter one of them.

The `package.json` contains the required JavaScript packages which are hosted at [npm](https://www.npmjs.com/). To install these dependencies run the following script at the root of this repository:

```bash
npm install
```

Upon executing this step, a `node_modules` folder is generated within your repo's root directory, housing all installed packages and their dependencies. Node.js subsequently locates and loads these packages as needed by your application.

In case of installation issues or dependency reinstallation, simply delete the `node_modules` folder and install the dependencies again.

### Development

Once you have installed the dependencies, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Press `Ctrl + D` to terminate the development server.

When you run `npm run dev` for the first time, it creates the `.svelte-kit` folder, which the development server uses for storing build artifacts and cache. As you continue working on this repo, the development server relies on this folder for a faster development experience.

If unexpected issues arise during development, you can delete the `.svelte-kit` folder to remove the existing cache and build artifacts. Once deleted, restart the development server, which will generate a new `.svelte-kit` folder with a fresh cache, potentially resolving any problems you encountered.

You might be wondering what we mean by *Development* in the context of this repo. We will cover the [Customization](#customization) options in more detail later in this document.

### Type-checking and Linting

Perform type checking to ensure that `src/custom/database.ts` aligns with `src/database.d.ts`, and fix any errors or warnings that arise:

```bash
npm run check
```

Check the code for syntax and style issues, and fix any errors or warnings that arise:

```bash
npm run lint
```

The original `src/custom/example.database.ts` can be helpful for comparing it with the modified `src/custom/database.ts` to troubleshoot and resolve any errors.

### Building

To create a production version of your app:

```bash
npm run build
```

Fix any errors or warnings that arise.

A known warning can be left unresolved before deployment. It is related to older SvelteKit versions and involves the [adapter-auto package](https://vercel.com/docs/beginner-sveltekit/adapters#adapter-types). The warning reads:
> Unable to detect a supported production environment. Visit <https://kit.svelte.dev/docs/adapters> to learn how to configure your app for your chosen platform.

To preview the production build in the browser:

```bash
npm run preview
```

### Pushing Changes

You can now use Git commands to push your changes to GitHub.

If you accidentally push a commit that fails :x:, don't worry. Simply start over the [Local Workflow](#local-workflow) and address the issues.

## Automation

After  pushing your changes to GitHub, the automated processes take over.
Automation significantly improves software development by providing consistent validation through Continuous Integration (CI) and facilitating automated deployment via Continuous Delivery (CD).

### Continuous Integration

This repository contains a GitHub Workflow located at `.github/workflows/ci.yml`, which executes installation, validation, and build processes on GitHub. The workflow runs can be viewed under the `Actions` tab.

### Continuous Delivery

In our case, we utilize [Vercel](https://vercel.com/) as the hosting platform for our static website, enabling an automated and seamless release process into production. The deployments can be viewed under the `Deployments` tab.

But first, we need to set up CD by importing our Git repo from GitHub to Vercel. Complete this one-time task once you have a successfully :heavy_check_mark: pushed commit on GitHub:

1. Sign in to [vercel.com](https://vercel.com/) with your GitHub account.
2. Go to the [Dashboard](https://vercel.com/dashboard)
3. Click `Add New` and choose `Project`
4. In the `Import Git repository` section, you'll see your imported Git repositories. To import a new one, click `Adjust GitHub App Permissions →` next to `Missing Git repository?` question.
5. In the popup, click `Configure` next to your GitHub username
6. *Optional* If you enabled 2FA on GitHub, you'll need to authorize yourself.
7. Enlarge the window, and you'll see it landed on GitHub. Scroll down to `Repository access`, select the repository, and click `Save`. This authorizes Vercel to access your repository and create a static site from it.
8. The popup will be closed automatically, and you'll see the authorized repository in the Vercel Dashboard. Click `Import` next to it.
9. Leave the settings as they are and click the wide `Deploy` button.
10. If you see "Congratulations", your site is live!
11. Click `Continue to Dashboard` to set the domain for the site.
12. Click `Settings` at the top, then `Domains` on the left panel.
13. Add your domain name if you have one, or `Edit` the name provided by Vercel.
14. Visit your site on the domain 🎉

The deployed site from this repository can be viewed at [dalum.vercel.app](https://dalum.vercel.app/).

From this point forward, every time you push to the `main` branch (or create a pull request), GitHub CI processes will automatically test, validate, and build your code changes to ensure seamless integration with the existing codebase. Subsequently, Vercel CD processes will deploy the updated code automatically from the `main` branch. If the checks pass :heavy_check_mark:, your live site will be updated smoothly. However, if the checks fail :x:, the deployment will not proceed, and your live site will remain unchanged, preserving the last successful deployment.

## Customization

Three key areas for customization include:

- `package.json` The core of every Node.js application, it is used to manage dependencies for the project. You can install or uninstall dependencies using the `npm` CLI.
- `src/custom/` A directory for the database, the Markdown files, and styling.
- `static/` A directory containing static assets, such as favicon and images.

### Content

#### Database

This repository does not have a backend or a persistent database, so all information must be stored in files located in the `src/custom/` folder. Customize the `database.ts` file with your own information to display your personal content on the website.

> `example.database.ts`: This file serves as a reference for the website's data. Do not delete or modify it; keep it for future reference. Initially the `database.ts` is a copy of this example.

> `src/database.d.ts`: This file outlines the structure and data types for the `{example.}database.ts` files, ensuring they are accurate and conform to the expected format, thus preventing errors. The types utilized in the [Type-checking and Linting](#type-checking-and-linting) section rely on this file.

##### Structure

The following trees provide an alternative representation of the type definitions found in `src/database.d.ts` to help you better understand the structure and connections between different fields. In these trees, optional fields are marked with a `❎` symbol. You can remove or comment out these subtrees from the `database.ts` as needed.

```
- profile
  ├── sidebar
  └── pages
      ├── about
      ├── resume ❎
      └── portfolio ❎
```

```
- sidebar
  ├── name
  ├── profession
  │
  ├── img
  │   ├── src
  │   └── alt
  │
  ├── info_more_btn
  │   ├── text
  │   └── icon
  │
  ├── contacts[] ❎
  │   ├── title
  │   ├── icon
  │   ├── link
  │   └── text
  │   │
  │   <or>
  │   │
  │   ├── title
  │   ├── icon
  │   └── address
  │
  └── socials[] ❎
      ├── link
      └── icon
```

```
- about
  ├── route
  │   ├── id
  │   └── nav
  │
  ├── seo
  │   ├── title
  │   ├── description
  │   └── keywords
  │
  ├── title
  │
  ├── paragraphs[] ❎
  │
  ├── services ❎
  │   ├── title
  │   └── items[]
  │       ├── title
  │       ├── text
  │       └── img
  │           ├── src
  │           └── alt
  │
  ├── testimonials ❎
  │   ├── title
  │   └── items[]
  │       ├── name
  │       ├── date
  │       ├── text
  │       ├── qoute
  │       │   ├── src
  │       │   └── alt
  │       └── img
  │           ├── src
  │           └── alt
  │
  └── clients ❎
      ├── title
      └── items[]
          ├── link
          └── img
              ├── src
              └── alt
```

```
- resume ❎
  ├── route
  │   ├── id
  │   └── nav
  │
  ├── seo
  │   ├── title
  │   ├── description
  │   └── keywords
  │
  ├── title
  │
  ├── education ❎
  │   ├── title
  │   └── items[]
  │       ├── title
  │       ├── year
  │       └── text
  │
  ├── experience ❎
  │   ├── title
  │   └── items[]
  │       ├── title
  │       ├── year
  │       └── text
  │
  └── skills ❎
      ├── title
      └── items[]
          ├── name
          └── percentage
```

```
- portfolio ❎
  ├── route
  │   ├── id
  │   └── nav
  │
  ├── seo
  │   ├── title
  │   ├── description
  │   └── keywords
  │
  ├── title
  │
  ├── select_category_option ❎
  ├── allCategory ❎
  │
  └── projects[]
      ├── slug
      ├── title
      ├── category ❎
      ├── client ❎
      ├── description
      └── img
          ├── src
          └── alt
```

##### Search Engine Optimization (SEO)

###### For top-level Pages

Each Page - `page.about`, `page.resume`, `page.portfolio` - has an `seo` section that will be rendered as meta content in the `<head>` of your site.

Example `<head>` for the Resume page:

```html
<head>
  <title>Richard Hanrick · Resume</title>
  <meta name="description" content="Richard Hanrick's profile: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.">
  <meta name="keywords" content="freelancer, data science, analytics">
</head>
```

###### For Project pages

Each Project page - `portfolio.projects[]` - has a dynamically generated SEO meta content based on the following rules:

| Meta          | Content                                                           |
| ------------- | ----------------------------------------------------------------- |
| `title`       | `sidebar.name · page.portfolio.projects[].title`                  |
| `description` | `page.portfolio.projects[].description`                           |
| `keywords`    | `page.portfolio.seo.keywords, page.portfolio.projects[].category` |

Example `<head>` for a Project page:

```html
<head>
  <title>Richard Hanrick · Finance</title>
  <meta name="description" content="A short (max. 155 charaters) description which can be nicely appear in SEO">
  <meta name="keywords" content="freelancer, data science, analytics, Statistics">
</head>
```

#### Markdown

The content of the individual Project pages on your site comes from the Markdown files located in the `src/custom/projects/` folder.

##### Connection

To establish a connection between the Markdown files and the `database.ts`, specifically the items in the `portfolio.projects[]` array, ensure that the filename of each Markdown file and the `slug` field of each item in the `portfolio.projects[]` array are identical. By doing this, the `projects/{slug}.md` Markdown file corresponds to a single item in the `portfolio.projects[]` array which has the same `slug` value, and the Markdown file will be rendered on the page at the URL <https://example.com/portfolio/{slug}>.

You may notice that there are only two items in the `projects/` folder, while there are more items in the `portfolio.projects[]` array. When rendering a Project page with a specific `slug`, the site first looks for a Markdown file to be rendered from `projects/{slug}.md`. If it is missing, the site will render the corresponding item from the `portfolio.projects[]` array.

On the contrary, if a Markdown file exists with some `slug` but there is no corresponding item in the `portfolio.projects[]` array, then nothing will be rendered, and the Markdown file will not be accessible to visitors.

The `projects/_markdown_syntax.md` contains the supported syntax for Markdown files in this repository. Avoid deleting this file; instead, delete or comment out the corresponding item in the `portfolio.projects[]` array, so it will not appear on your site.

##### Controlling the Markdown

In the following, we will analyze the content of the `projects/_markdown_syntax.md` file to demonstrate two special formatting options you can utilize in your Markdown files to achieve a visually more appealing outcome.

- **Category and Client**

  To render values from `portfolio.projects[].category` and `portfolio.projects[].client` distinctively from other bold texts, place them immediately after the `# Title` within two **bold items**, like this:

  ```markdown
  # Markdown Syntax

  **Markdown**
  **Acme Comp**
  ```

- **Image width**

   Image width can be adjusted by using the `|full` postfix in the image alt text. Including `|full` causes the image to expand to the full width of the container, while omitting it renders the image at its actual size:

  ```markdown
  ![Appealing Markdown logo |full](/example_images/_markdown_syntax.png)
  ![Appealing Markdown logo](/example_images/_markdown_syntax.png)
  ```

### Static Assets

Place any static assets that should be served as-is, such as images, in the `static/` folder. You can organize this folder as you see fit, but make sure to:

- Keep the `robots.txt` file in its current location, as it is related to SEO, and
- Keep a `favicon.ico` in the same location as the current one.

When referencing an image, for example in `database.ts` or within a Project Markdown file, omit the `static` prefix and use the next folder, starting with a `/`.

The `static/example_images/` folder contains the images used in `example.database.ts` (and initialy in `database.ts`). You can keep this folder and create a new `static/images/` folder for your personal images, which can then be used in `database.ts`.

### Styling

#### Colors

The customizable colors can be found in `src/custom/colors.css`.

Start the development server, and modify the colors in VSCode. You will see the changes right away in the browser.

#### Fonts

1. Terminate the development server if it is running.

2. Choose a font family from [Fontsource](https://fontsource.org/), such as [Open Sans](https://fontsource.org/fonts/open-sans).

3. Execute the installation script at the root of the repository (note that the official instructions use the `yarn` package manager, which is not advised here):

    ```bash
    npm install @fontsource/open-sans
    ```

    After executing this script, the `dependencies` in the `package.json` file will be updated.

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

    Once again, you will see the changes reflected in the `dependencies` of the `package.json` file.

6. Finally restart the development server to view the updated font on your website.

#### Icons

1. Terminate the development server if it is running.

2. Select an icon set from [Iconify Design](https://icon-sets.iconify.design/), such as [Material Symbols](https://icon-sets.iconify.design/material-symbols/).

3. The URL should resemble `icon-sets.iconify.design/material-symbols/`, with the last part, in this case `material-symbols`, identifying the icon set. Run the installation script at the root of the repository:

    ```bash
    npm install @iconify-icons/material-symbols --save-dev
    ```

    After executing this script, the `devDependencies` in the `package.json` file will be updated.

4. Restart the development server to observe the replacement of the default IonIcon phone with a new Material Design phone in the Sidebar. Open the `src/custom/icons.js` file in VSCode.

5. On the Iconify site, locate the desired icon, such as [phone-android-outline](https://icon-sets.iconify.design/material-symbols/phone-android-outline/). Near the icon, in the first input, there will be text like `material-symbols:phone-android-outline`. Copy this text.

6. In the `src/custom/icons.js` file, edit the line and verify the changes in the browser:

    ```javascript
    ...
    import phone from "@iconify-icons/ion/phone-portrait-outline.js";
    ...
    ```

     The result should look like (replacing `:` with `/`):

    ```javascript
    ...
    import phone from "@iconify-icons/material-symbols/phone-android-outline.js";
    ...
    ```

7. If all icons in the `src/custom/icons.js` file have been replaced and you no longer use IonIcons, uninstall the icon set:

    ```bash
    npm uninstall @iconify-icons/ion
    ```

    Once again, you will see the changes reflected in the `devDependencies` of the `package.json` file.

## Troubleshooting

- Optional fields: Refer to the type definitions in `src/database.d.ts` to see which fields are marked as optional with a `?`.
- Required fields: If you see the word `undefined` somewhere on your site it indicates a missing required field in `database.ts`.
- What can you do if a field is required but you do not need it:
  - Examine its ancestors; if one of them is optional, you might not need the entire subtree.
  - You can try setting the field to an empty string `""`, an empty array `[]`, or `null`, and then preview the changes in the browser to see if the value appears as `undefined` or not. However, this approach is considered a hack and may not always produce the desired results.
- Broken images: Avoid using the `static` prefix in the `img.src` fields, but ensure the path starts with `/`.
- Broken Markdown: Refer to the `projects/_markdown_syntax.md` for the supported syntax.
