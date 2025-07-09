import type { SyntaxHighlighterProps } from 'storybook/internal/components';

export type SourceFile = {
  id?: string;
  name?: string;
  code: string;
  language?: SyntaxHighlighterProps['language'];
};

export type CodePanelProps = {
  sourceFiles: SourceFile[];
};
