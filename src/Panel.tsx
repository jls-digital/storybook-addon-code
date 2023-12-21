import { TabsState, SyntaxHighlighter } from '@storybook/components';
import React from 'react';
import { CodePanelProps } from './types';

export default function CodePanel({ sourceFiles }: CodePanelProps) {
  if (sourceFiles.length === 0)
    return <div style={{ padding: '1rem' }}>No source code available</div>;

  return (
    <TabsState>
      {sourceFiles.map((file, i) => (
        <div
          key={i}
          id={file?.id || i.toString()}
          title={file?.name || i.toString()}
        >
          <SyntaxHighlighter
            language={file?.language || 'typescript'}
            copyable
            showLineNumbers
          >
            {file?.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </TabsState>
  );
}
