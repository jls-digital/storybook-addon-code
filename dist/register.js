import { useParameter } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import { AddonPanel, TabsState, SyntaxHighlighter } from '@storybook/components';
import React from 'react';

// src/register.tsx
function CodePanel({ sourceFiles }) {
  if (sourceFiles.length === 0)
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "1rem" } }, "No source code available");
  return /* @__PURE__ */ React.createElement(TabsState, null, sourceFiles.map((file, i) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: i,
      id: file?.id || i.toString(),
      title: file?.name || i.toString()
    },
    /* @__PURE__ */ React.createElement(
      SyntaxHighlighter,
      {
        language: file?.language || "typescript",
        copyable: true,
        showLineNumbers: true
      },
      file?.code
    )
  )));
}

// src/register.tsx
var ADDON_ID = "jb-int/code";
var PANEL_ID = `${ADDON_ID}/panel`;
addons.register(ADDON_ID, () => {
  const render = ({ active = false }) => {
    const sourceFiles = useParameter("sourceCode", []);
    return /* @__PURE__ */ React.createElement(AddonPanel, { active }, /* @__PURE__ */ React.createElement(CodePanel, { sourceFiles }));
  };
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Source Code",
    paramKey: "storybook-addon-code",
    render
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=register.js.map