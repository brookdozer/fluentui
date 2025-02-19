## API Report File for "@fluentui/react-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { PartialTheme } from '@fluentui/react-theme';
import type { ProviderContextValue } from '@fluentui/react-shared-contexts';
import * as React_2 from 'react';
import type { Theme } from '@fluentui/react-theme';
import type { ThemeClassNameContextValue } from '@fluentui/react-shared-contexts';
import type { ThemeContextValue } from '@fluentui/react-shared-contexts';
import type { TooltipContextType } from '@fluentui/react-shared-contexts';
import { useFluent } from '@fluentui/react-shared-contexts';
import { useTheme } from '@fluentui/react-shared-contexts';

// @public (undocumented)
export const FluentProvider: React_2.ForwardRefExoticComponent<FluentProviderProps & React_2.RefAttributes<HTMLElement>>;

// @public (undocumented)
export interface FluentProviderCommons {
    dir: 'ltr' | 'rtl';
    targetDocument: Document | undefined;
}

// @public (undocumented)
export interface FluentProviderContextValues {
    // (undocumented)
    provider: ProviderContextValue;
    // (undocumented)
    theme: ThemeContextValue;
    // (undocumented)
    themeClassName: ThemeClassNameContextValue;
    // (undocumented)
    tooltip: TooltipContextType;
}

// @public (undocumented)
export interface FluentProviderProps extends Omit<ComponentProps<FluentProviderSlots>, 'dir'>, Partial<FluentProviderCommons> {
    // (undocumented)
    theme?: PartialTheme;
}

// @public (undocumented)
export const fluentProviderShorthandProps: (keyof FluentProviderSlots)[];

// @public (undocumented)
export type FluentProviderSlots = {
    root: IntrinsicShorthandProps<'div'>;
};

// @public (undocumented)
export interface FluentProviderState extends ComponentState<FluentProviderSlots>, FluentProviderCommons {
    // (undocumented)
    theme: Theme;
    // (undocumented)
    themeClassName: string;
}

// @public
export const renderFluentProvider: (state: FluentProviderState, contextValues: FluentProviderContextValues) => JSX.Element;

export { useFluent }

// @public
export const useFluentProvider: (props: FluentProviderProps, ref: React_2.Ref<HTMLElement>) => FluentProviderState;

// @public (undocumented)
export function useFluentProviderContextValues(state: FluentProviderState): FluentProviderContextValues;

export { useTheme }

// (No @packageDocumentation comment for this package)

```
