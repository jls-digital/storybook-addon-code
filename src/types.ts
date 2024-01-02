export type SourceFile = {
  id?: string;
  name?: string;
  code: string;
  language?: string;
};

export type CodePanelProps = {
  sourceFiles: SourceFile[];
};
