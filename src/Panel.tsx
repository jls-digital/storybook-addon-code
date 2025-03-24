import { useParameter } from '@storybook/manager-api';
import {
  AddonPanel,
  SyntaxHighlighter,
  TabsState,
} from '@storybook/components';
import React from 'react';
import { SourceFile } from './types';

interface PanelProps {
  active: boolean;
}

const prepareParameters = (inputParameters: unknown): SourceFile[] =>
  Array.isArray(inputParameters)
    ? inputParameters
        .map((file) => {
          // Turn string into object with code property
          if (typeof file === 'string') return { code: file };
          // Expected case. Assign to itself
          if (typeof file === 'object' && file.code) return file;
          // If array value is neither string nor object with code property, filter it out
          return null;
        })
        // Filter out invalid data
        .filter((file) => !!file)
    : [];

const Panel: React.FC<PanelProps> = ({ active = false }) => {
  // Custom parameter, that should be used by consumers to pass their source code
  const sourceFiles: unknown = useParameter('sourceCode', []);

  // Prepare the data for the panel
  const preparedFiles: SourceFile[] = prepareParameters(sourceFiles);

  // Show a message if no valid source code is passed
  if (preparedFiles.length === 0 && active)
    return <div style={{ padding: '1rem' }}>No source code available</div>;

  return (
    <AddonPanel active={active}>
      <TabsState key={preparedFiles.length + preparedFiles.length}>
        {/* Create a tab for each prepared file */}
        {preparedFiles.map((file, i) => (
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
    </AddonPanel>
  );
};

export default Panel;
