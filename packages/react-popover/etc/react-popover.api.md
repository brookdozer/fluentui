## API Report File for "@fluentui/react-popover"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { Context } from '@fluentui/react-context-selector';
import type { ContextSelector } from '@fluentui/react-context-selector';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { IntrinsicShorthandProps } from '@fluentui/react-utilities';
import type { PopperVirtualElement } from '@fluentui/react-positioning';
import type { PortalProps } from '@fluentui/react-portal';
import type { PositioningShorthand } from '@fluentui/react-positioning';
import * as React_2 from 'react';
import type { usePopperMouseTarget } from '@fluentui/react-positioning';

// @public (undocumented)
export const arrowHeights: Record<PopoverSize, number>;

// @public
export type OnOpenChangeData = {
    open: boolean;
};

// @public
export type OpenPopoverEvents = MouseEvent | TouchEvent | React_2.MouseEvent<HTMLElement> | React_2.KeyboardEvent<HTMLElement> | React_2.FocusEvent<HTMLElement>;

// @public
export const Popover: React_2.FC<PopoverProps>;

// @public (undocumented)
export type PopoverCommons = Pick<PortalProps, 'mountNode'> & {
    open: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (e: OpenPopoverEvents, data: OnOpenChangeData) => void;
    openOnHover?: boolean;
    openOnContext?: boolean;
    noArrow?: boolean;
    size?: PopoverSize;
    appearance?: 'brand' | 'inverted';
    trapFocus?: boolean;
    positioning?: PositioningShorthand;
};

// @public (undocumented)
export const PopoverContext: Context<PopoverContextValue>;

// @public
export type PopoverContextValue = Pick<PopoverState, 'open' | 'setOpen' | 'triggerRef' | 'contentRef' | 'openOnHover' | 'openOnContext' | 'mountNode' | 'noArrow' | 'arrowRef' | 'size' | 'appearance' | 'trapFocus'>;

// @public
export type PopoverProps = Partial<PopoverCommons> & {
    children: [JSX.Element, JSX.Element] | JSX.Element;
};

// @public
export type PopoverSize = 'small' | 'medium' | 'large';

// @public
export type PopoverState = PopoverCommons & Pick<PopoverProps, 'children'> & {
    setOpen: (e: OpenPopoverEvents, open: boolean) => void;
    triggerRef: React_2.MutableRefObject<HTMLElement | null>;
    contentRef: React_2.MutableRefObject<HTMLElement | null>;
    arrowRef: React_2.MutableRefObject<HTMLDivElement | null>;
    contextTarget: PopperVirtualElement | undefined;
    setContextTarget: ReturnType<typeof usePopperMouseTarget>[1];
    size: NonNullable<PopoverProps['size']>;
};

// @public
export const PopoverSurface: ForwardRefComponent<PopoverSurfaceProps>;

// @public
export type PopoverSurfaceProps = ComponentProps<PopoverSurfaceSlots>;

// @public
export type PopoverSurfaceSlots = {
    root: IntrinsicShorthandProps<'div'>;
};

// @public (undocumented)
export const popoverSurfaceSlots: Array<keyof PopoverSurfaceSlots>;

// @public
export type PopoverSurfaceState = ComponentState<PopoverSurfaceSlots> & Pick<PopoverContextValue, 'open' | 'mountNode' | 'noArrow' | 'size' | 'appearance' | 'arrowRef'> & {
    arrowClassName?: string;
};

// @public
export const PopoverTrigger: React_2.FC<PopoverTriggerProps>;

// @public
export type PopoverTriggerProps = {
    children: React_2.ReactElement;
};

// @public
export type PopoverTriggerState = PopoverTriggerProps;

// @public
export const renderPopover: (state: PopoverState) => JSX.Element;

// @public
export const renderPopoverSurface: (state: PopoverSurfaceState) => JSX.Element | null;

// @public
export const renderPopoverTrigger: (state: PopoverTriggerState) => JSX.Element;

// @public
export const usePopover: (props: PopoverProps) => PopoverState;

// @public (undocumented)
export const usePopoverContext: <T>(selector: ContextSelector<Pick<PopoverState, "mountNode" | "open" | "setOpen" | "triggerRef" | "contentRef" | "openOnHover" | "openOnContext" | "noArrow" | "arrowRef" | "size" | "appearance" | "trapFocus">, T>) => T;

// @public
export const usePopoverSurface: (props: PopoverSurfaceProps, ref: React_2.Ref<HTMLDivElement>) => PopoverSurfaceState;

// @public
export const usePopoverSurfaceStyles: (state: PopoverSurfaceState) => PopoverSurfaceState;

// @public
export const usePopoverTrigger: (props: PopoverTriggerProps) => PopoverTriggerState;

// (No @packageDocumentation comment for this package)

```
