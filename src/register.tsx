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
    const sourceFiles: SourceFile[] = useParameter('sourceCode', []);

    return (
      <AddonPanel active={active}>
        <CodePanel sourceFiles={sourceFiles} />
      </AddonPanel>
    );
  };

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Source Code',
    paramKey: 'storybook-addon-code',
    render,
  });
});
