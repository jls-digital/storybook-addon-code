import { addons, types } from '@storybook/manager-api';
import React from 'react';
import Panel from './Panel';

const ADDON_ID = 'jb-int/code';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, () => {
  // Register the addon as a panel in the Storybook UI
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Source Code',
    paramKey: 'storybook-addon-code',
    render: ({ active }) => <Panel active={active} />,
  });
});
