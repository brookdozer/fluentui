// Type definitions extension for @storybook/addons 6.0.18
// Project: https://github.com/storybookjs/storybook/tree/next/lib/addons
// Definitions by: Martin Hochel
// Definitions: N/A
// TypeScript Version: 3.1

import { Parameters, ViewMode } from '@storybook/addons';

declare module '@storybook/addons' {
  // PUBLIC API - extended definitions
  export interface Parameters extends ParametersExtended {}

  // =====
  interface ParametersExtended {
    controls?: ControlsParameters & DisableControl;
    /**
     * control the view mode
     * @default 'story'
     * @remarks
     * Note that this behaviour is rather confusing and will work only after 1st user interaction click
     * on particular menu item. On initial render canvas will be always rendered.
     *
     * @see https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#controlling-a-storys-view-mode
     */
    viewMode?: ViewMode;
    /**
     * configure Storybook's preview tabs
     * @see https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#reordering-docs-tab-first
     */
    previewTabs?: Record<'storybook/docs/panel' | 'canvas', Partial<{ index: number; hidden: boolean }>>;
    docs?: Partial<{
      source: {
        /**
         * enable/disable rendering decorators in Docs mode
         */
        excludeDecorators: boolean;
      };
      /**
       * https://github.com/storybookjs/storybook/tree/next/addons/docs/react#inline-stories
       */
      inlineStories: boolean;
    }>;
    /**
     * @see https://github.com/microsoft/fluentui-storybook-addons
     */
    exportToCodeSandbox?: Partial<AddonExportToCodesandboxParameters>;
  }

  interface AddonExportToCodesandboxParameters {
    /**
     * Dependencies that should be included with every story
     */
    requiredDependencies: Record<string, string>;
    /**
     * Content of index.tsx in CodeSandbox
     */
    indexTsx: string;
  }

  interface ControlsParameters {
    sort?: 'alpha' | 'requiredFirst' | 'none';
    expanded?: boolean;
    presetColors?: Array<string | { color: string; title?: string }>;
    hideNoControlsWarning?: boolean;
  }

  type DisableControl = { disable?: boolean };
}
