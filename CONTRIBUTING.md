# How to contribute

Hi, we're glad you want to help this project grow. If you need help with anything,
feel free to open an issue or discussion topic.

## Set up your dev environment

You'll need the following software installed:

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [pnpm](https://pnpm.io/)
- [git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

Then, follow these steps:

1. Clone the repository: `git clone https://github.com/jls-digital/storybook-addon-code.git`
2. Run `pnpm install`
3. Run `pnpm build`
4. In a storybook project, add
`"@florian.dendorfer_jls.ch/storybook-addon-code": "link:<path_to_cloned_repo>",`
to the `dependencies` in `package.json`
5. Run `pnpm install` in the storybook project
6. Enable the addon in `.storybook/main.ts` (see example below)

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  addons: [
    /* other addons */
    '@florian.dendorfer_jls.ch/storybook-addon-code'
  ],
};
```

## Submitting a pull request

Create a new branch or a fork from the main branch and make your changes. Then
open a pull request with a description of your changes and thoughts behind them.

## Coding conventions

Coding conventions should be enforced by eslint and prettier. You can run the
linter with `pnpm lint` and the formatter with `pnpm format`. Autofixable errors
can be fixed across all files with `pnpm lint-fix` or `pnpm format-fix` respectively.

## Future feature considerations

- Support all languages from prism/hljs. Storybook's syntax highlighter only uses
a limited set of languages.
- Automatic import of source code files
- Ctrl + click to jump to reference (e.g. in Interface)
- Button to open code (local file) in editor
