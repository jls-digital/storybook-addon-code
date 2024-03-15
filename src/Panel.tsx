import { TabsState, SyntaxHighlighter } from '@storybook/components';
import React from 'react';
import { CodePanelProps } from './types';

export default function CodePanel({ sourceFiles }: CodePanelProps) {
  return (
    <TabsState key={sourceFiles.length + sourceFiles.length}>
      {/* Create a tab for each prepared file */}
      {sourceFiles.map((file, i) => (
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
      ))}
    </TabsState>
  );
}
