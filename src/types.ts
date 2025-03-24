import { SupportedLanguage } from '@storybook/components';

export type SourceFile = {
  id?: string;
  name?: string;
  code: string;
  language?: SupportedLanguage;
};
