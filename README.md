# storybook-addon-code

This storybook addon provides the ability to display a panel on stories with any
code you want. It's mostly a wrapper for
[storybook's syntax highlighter](https://github.com/storybookjs/storybook/tree/main/code/ui/components/src/components/syntaxhighlighter)
, which is a wrapper for [prism.js](https://www.npmjs.com/package/prismjs).

## Installation

1. `npm install --save-dev storybook-addon-code`
2. Add `storybook-addon-code` to your storybook's config
3. Add the `sourceCode` parameter to your stories

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  addons: ['storybook-addon-code'],
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
