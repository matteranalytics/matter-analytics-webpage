# Portfolio

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Workflow](#workflow)
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
    - [Favicon](#favicon)
    - [Images](#images)
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

## Workflow

Key steps of the portfolio creation which take place locally on your computer.

### Installation

This repo uses Node.js's built-in package manager command-line tool [npm](https://docs.npmjs.com/cli/v9). There are other package managers, we will warn you when you may encounter one of them.

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

You might be wondering what we mean by _Development_ in the context of this repo. We'll cover the [Customization](#customization) options in more detail later in this document.

### Type-checking and Linting

Perform type checking to ensure that `src/custom/database.ts` aligns with `src/custom/database.d.ts`, and fix any errors or warnings that arise:

```bash
npm run check
```

Check the code for syntax and style issues, and fix any errors or warnings that arise:

```bash
npm run lint
```

The original `src/custom/template.database.ts` file can be helpful for comparing it with the modified `src/custom/database.ts` file to troubleshoot and resolve any errors.
However, the `src/custom/template.database.ts` might not render correctly anymore if you have removed the default images from the `static/images/` folder.

### Building

To create a production version of your app:

```bash
npm run build
```

Fix any errors or warnings that arise.

A known warning can be left unresolved before deployment. It is related to older SvelteKit versions and involves the [adapter-auto package](https://vercel.com/docs/beginner-sveltekit/adapters#adapter-types):
> Unable to detect a supported production environment. Visit <https://kit.svelte.dev/docs/adapters> to learn how to configure your app for your chosen platform.

To preview the production build in the browser:

```bash
npm run preview
```

### Pushing Changes

You can now use Git commands to push your changes to GitHub.

If you accidentally push a commit that fails :x:, don't worry. Simply start over the [Workflow](#workflow) and address the issues.

## Automation

After pushing your changes to GitHub, the automated processes take over.
Automation significantly improves software development by providing consistent validation through Continuous Integration (CI) and facilitating automated deployment via Continuous Delivery (CD).

### Continuous Integration

This repository contains a GitHub Workflow located at `.github/workflows/ci.yml`, which executes installation, validation, and build processes on GitHub. The workflow runs can be viewed under the `Actions` tab.

### Continuous Delivery

In this example, we utilize [Vercel](https://vercel.com/) as the hosting platform for our static website, enabling an automated and seamless release process into production. The deployments can be viewed under the `Deployments` tab.

But first, we need to set up CD by importing our Git repo from GitHub to Vercel. Complete this one-time task once you have a successfully :heavy_check_mark: processed repository on GitHub:

1. Sign in to [vercel.com](https://vercel.com/) with your GitHub account.
2. Go to the [vercel.com/dashboard](https://vercel.com/dashboard)
3. Click `Add New` and choose `Project`
4. In the `Import Git repository` section, you'll see your imported Git repositories. To import a new one, click `Adjust GitHub App Permissions →` next to `Missing Git repository?` question.
5. In the popup, click `Configure` next to your GitHub username
6. _Optional_ If you enabled 2FA on GitHub, you'll need to authorize yourself.
7. Enlarge the window, and you'll see it landed on GitHub. Scroll down to `Repository access`, select your portfolio source code repository, and click `Save`. This allows Vercel to access your repository and create a static site from it.
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

There are two files related to the well-structured content of your site:

- `src/custom/template.database.ts`: This file serves as a reference for your website's data. Do not delete or modify it; keep it for future reference.
- `src/custom/database.ts`: Initially a copy of the template, you can customize this file with your own information to display on your website.

> The types utilized in the [Type-checking and Linting](#type-checking-and-linting) section can be found in `src/database.d.ts`. This file outlines the structure and data types for your `{template.}database.ts` files, ensuring they are accurate and conform to the expected format, thus preventing errors.

##### Structure

The following trees provide an alternative representation of the `src/database.d.ts` file to help you better understand the structure and connections between different properties. In these trees, optional fields are marked with a ❎ symbol. You can remove these subtrees from your portfolio as needed.

```
- localeDateString
  ├── locale
  │
  └── options
      ├── day
      ├── month
      └── year
```

```
- sidebar
  ├── name
  ├── profession
  │
  ├── info_more_btn
  │   ├── text
  │   └── icon
  │
  ├── img
  │   ├── src
  │   └── alt
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
- pages
  ├── about
  ├── resume ❎
  └── portfolio ❎

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
  ├── paragraphs[] ❎
  │
  ├── services ❎
  │   ├── title
  │   └── items[]
  │       ├── img
  │       │   ├── src
  │       │   └── alt
  │       ├── title
  │       └── text
  │
  ├── testimonials ❎
  │   ├── title
  │   └── items[]
  │       ├── qoute
  │       │   ├── src
  │       │   └── alt
  │       ├── img
  │       │   ├── src
  │       │   └── alt
  │       ├── name
  │       ├── date
  │       └── text
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
  ├── select_category_option ❎
  ├── allCategory ❎
  │
  └── projects[]
      ├── slug
      ├── title
      ├── category ❎
      ├── client ❎
      ├── img
      │   ├── src
      │   └── alt
      └── description
```

##### Search Engine Optimization (SEO)

###### For Pages

Each page (`page.about`, `page.resume`, `page.portfolio`) has an `seo` section that will be rendered as meta content in the `<head>` of your site.

Example `<head>` for the Resume page:

```html
<head>
  <title>Richard Hanrick · Resume</title>
  <meta name="description" content="Richard Hanrick's portfolio: Explore services, view client work, and read testimonials to see how Richard Hanrick can elevate your project.">
  <meta name="keywords" content="freelancer, data science, analytics">
</head>
```

###### For Projects

Each Project `page.portfolio.projects[]` has a dynamically generated SEO meta content based on the following rules:

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

In this setup, the content of the individual Project pages on your site comes from two sources:

1. The `pages.portfolio.projects[]` array in the `src/custom/database.ts` file, and
2. The Markdown files located in the `src/custom/projects` folder.

For simplicity, we will refer to the array as the `projects[]` array and the folder as the `projects` folder.

To establish a connection between the two, the `slug` field of each Project within the `projects[]` array and the filename of each Markdown file are used. In this way, the value of `projects[].slug` corresponds to `projects/{slug}.md`, and the content will be rendered on the page at the URL <http://mysite.com/portfolio/{slug}>.

You may notice that there are only two items in the `projects` folder, while there are more items in the `projects[]` array. When rendering a Project page, the site utilizes the data found in the `projects[]` array. If there is an associated Markdown file, the content from that file will also be rendered on the page.

On the contrary, if a Markdown file exists in the `projects` folder but there is no item in the `projects[]` array with a `slug` field that matches the Markdown file's name, nothing will be rendered, and the Project will not be accessible to visitors.

A `_template.md` file is provided in the `projects` folder, containing the allowed syntax for Markdown files in this repository. Avoid deleting this file; instead, comment out the corresponding item in the `projects[]` array, so it will not appear on your site.

### Static assets

#### Favicon

#### Images

### Styling

#### Colors

The customizable colors can be found in `src/custom/colors.css`.

Start the development server, and modify the colors in VSCode. You will see the changes right away in the browser.

#### Fonts

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

#### Icons

1. Terminate the development server if it is running.

2. Choose an icon set from [fontsource](https://fontsource.org/), such as [Open Sans](https://fontsource.org/fonts/open-sans).

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

## Troubleshooting

- Optional fields: Refer to the type definitions in `src/database.d.ts` to see which fields are marked as optional with a `?`.
- Required fields: If you see the word `undefined` somewhere on your site it indicates a missing required field in `database.ts`.
- What can you do if a field is required but you do not need it:
  - Examine its ancestors; if one of them is optional, you might not need the entire subtree.
  - Try setting the field to an empty string `""`, empty array `[]`, or `null`, and then preview it in the browser if you see `undefined` or do not.
- Broken images: Avoid using the `static` prefix in the `img.src` fields, but ensure the path starts with `/`.
- Broken Markdown: Refer to the `_template.md` for the allowed syntax.
