import { useParameter } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';
import CodePanel from './Panel';
import { SourceFile } from './types';

const ADDON_ID = 'jb-int/code';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
  const render = ({ active = false }) => {
    // Custom parameter, that should be used by consumers to pass their source code
    const sourceFiles: any = useParameter('sourceCode', []);

    // Prepare the data for the panel
    const preparedFiles: SourceFile[] = Array.isArray(sourceFiles)
      ? sourceFiles
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

    // Show a message if no valid source code is passed
    if (preparedFiles.length === 0 && active)
      return <div style={{ padding: '1rem' }}>No source code available</div>;

    return (
      <AddonPanel active={active}>
        <CodePanel sourceFiles={preparedFiles} />
      </AddonPanel>
    );
  };

  // Register the addon as a panel in the Storybook UI
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Source Code',
    paramKey: 'storybook-addon-code',
    render,
  });
});
