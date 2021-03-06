# Smart Reef Storybook

A StorybookJS starter project using TailwindCSS.

## Getting Started

### Build TailwindCSS

`npm run build:tailwind` builds `/src/css` into `/styles/tailwind.css` via PostCSS. If you are regularly updating `/src/css` use `build:tailwindWatch` to build css on file change.

### Testing

`npm run test:updateSnapshot` updates the project's Jest snapshots

`npm run test` runs Jest tests and outputs `/tests/.jest-test-results.json` that is used in Storybook test panels. `npm run test:dev` runs Jest tests without exporting an results file

### Run storybook locally

`npm run start` will build and open storybook in a new browser.

### Build as a static site for deployment

`npm run build:tailwind` builds `/src/css` into `/styles/tailwind.css` via PostCSS

`npm run build:storybook` builds storybook as a static website to `/dist`.

## Folders

### Components

Composite components that may be shared with other projects. Usually via bit.dev

Folder structure `/src/components/[group name]/[component name]`

- `/__snapshots__` autogenerated directory created by Jest for snapshot testing  <https://jestjs.io/docs/en/snapshot-testing>

- `index.js` the component definition, it's prop types and default props.

- `[component name].notes.design.md` markdown documentation for any design specific notes

- `[component name].notes.tech.md` markdown documentation for any tech specific notes

- `[component name].stories.js` CSF documentation for stories

- `[component name].stories.mdx` additional stories documented in MDX

- `[component name].test.js` Jest tests

### Elements

Core elements that are used in 1:n components - e.g. textbox with validation states

Folder `/elements/[group name]/`

### CSS

This project is setup to use PostCSS. This folder should be used as the source css which gets transformed into the `/styles` folder.

Folder `/src/css`

### Layouts

Storybook panel decorators

Folder: `/src/layouts`

## Stories

General stories that do not belong to a component or element.

Folder `/stories/[group name]`

## Styles

Compiled css files from PostCSS and pre-compiled css files.

This project utilises `tailwind.css` which is compileld from `/src/css` and output to `/src/css/tailwind.css`.

Folder `/styles`

## Tests

Jest test configuration and result output. Component and element tests should be located in their respective src folder.

Folder `/tests`

- `/__snapshots__` autogenerated directory created by Jest for snapshot testing <https://jestjs.io/docs/en/snapshot-testing>

- `.jest-test-results.json` output results from a test run. This file should be deployed as it is used in the Storybook test planel.

- `storybook.test.js` config for `@storybook/addon-storyshots`
