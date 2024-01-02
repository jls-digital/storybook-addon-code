# storybook-addon-code

[![NPM](https://img.shields.io/npm/l/%40florian.dendorfer_jls.ch%2Fstorybook-addon-code)](https://github.com/jls-digital/storybook-addon-code/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/%40florian.dendorfer_jls.ch%2Fstorybook-addon-code)](https://www.npmjs.com/package/@florian.dendorfer_jls.ch/storybook-addon-code)
[![install size](https://packagephobia.com/badge?p=@florian.dendorfer_jls.ch/storybook-addon-code)](https://packagephobia.com/result?p=@florian.dendorfer_jls.ch/storybook-addon-code)
[![OSS Lifecycle](https://img.shields.io/osslifecycle/jls-digital/storybook-addon-code)](https://github.com/jls-digital/storybook-addon-code)

This storybook addon provides the ability to display a panel on stories with any
code you want. It's mostly a wrapper for
[storybook's syntax highlighter](https://github.com/storybookjs/storybook/tree/main/code/ui/components/src/components/syntaxhighlighter)
, which is a wrapper for [prism.js](https://www.npmjs.com/package/prismjs).

## Installation

1. `npm install --save-dev @florian.dendorfer_jls.ch/storybook-addon-code`
2. Add `storybook-addon-code` to your storybook's config
3. Add the `sourceCode` parameter to your stories

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  addons: ['@florian.dendorfer_jls.ch/storybook-addon-code'],
};
```

## Usage

In your story files, you can now import code as string (with vite by using the
'?raw' query parameter) and pass it to the `sourceCode` parameter. You can even
import the file you're currently in:

```ts
// button.stories.ts
import rawStories from './button.stories?raw';
import rawComponent from './button?raw';
const meta: Meta<IButtonStory> = {
  parameters: {
    sourceCode: [
      { name: 'Component', code: rawComponent },
      { name: 'Stories', code: rawStories },
    ]
  },
  title: 'Components/Button',
}
```

### Arguments

| Name | Description | Values |
| --- | --- | --- |
| `name` | The name of the sub tab. Default: index of tab. | `string` |
| `code` | The code to display | `string` |
| `language` | The language of the code that should be used for syntax highlighting. Default: 'typescript'. | [Available languages rsh](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD) |

## FAQ

Q: When I add a new file to the list of source code, I get an error saying
`The final argument passed to useMemo changed size between renders.`

A: No worries, this is an issue with storybook's TabsState component. You can
simply reload the page and it should work fine.

## Contribute

Feel free to open issues and pull requests for bugs, feature requests or
questions. If you want to contribute, please make sure your code is documented
and linted/formatted.

## Releasing a new version

1. Make sure you have the latest version of the main branch
2. Make sure you're logged in to npm with `npm whoami`, otherwise log in with
`npm login`
3. Run `npm version <major|minor|patch>` to bump the version and create a new
commit and tag
4. Push the new commit and tag with `git push --follow-tags` (can also be set
via config `git config --global push.followTags true`)
