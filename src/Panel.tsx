import { TabsView, SyntaxHighlighter } from 'storybook/internal/components';
import React, { useMemo } from 'react';
import type { CodePanelProps } from './types';

export default function CodePanel({ sourceFiles }: CodePanelProps) {
  // Create a tab for each prepared file
  const tabs = useMemo(
    () =>
      sourceFiles.map((file, i) => ({
        id: file.id || `file-${i}`,
        title: file.name || `File ${i + 1}`,
        children: (
          // id is used as the key and title as the tab title by TabsState
          <div key={i} id={i.toString()} title={file.name || i.toString()}>
            <SyntaxHighlighter
              copyable
              language={file.language || 'typescript'}
              showLineNumbers
            >
              {file.code}
            </SyntaxHighlighter>
          </div>
        ),
      })),
    [sourceFiles],
  );

  return <TabsView tabs={tabs} />;
}
