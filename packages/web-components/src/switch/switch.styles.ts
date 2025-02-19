import { css, ElementStyles } from '@microsoft/fast-element';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  disabledCursor,
  display,
  ElementDefinitionContext,
  focusVisible,
  forcedColorsStylesheetBehavior,
  SwitchOptions,
} from '@microsoft/fast-foundation';
import { DirectionalStyleSheetBehavior, heightNumber } from '../styles';
import {
  accentFillActive,
  accentFillHover,
  accentFillRest,
  bodyFont,
  designUnit,
  disabledOpacity,
  fillColor,
  focusStrokeOuter,
  foregroundOnAccentActive,
  foregroundOnAccentHover,
  foregroundOnAccentRest,
  neutralFillInputAltActive,
  neutralFillInputAltFocus,
  neutralFillInputAltHover,
  neutralFillInputAltRest,
  neutralForegroundRest,
  neutralStrokeStrongActive,
  neutralStrokeStrongHover,
  neutralStrokeStrongRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
} from '../design-tokens';

export const switchStyles: (context: ElementDefinitionContext, definition: SwitchOptions) => ElementStyles = (
  context: ElementDefinitionContext,
  definition: SwitchOptions,
) =>
  css`
    :host([hidden]) {
      display: none;
    }

    ${display('inline-flex')} :host {
      align-items: center;
      outline: none;
      font-family: ${bodyFont};
      margin: calc(${designUnit} * 1px) 0;
      ${
        /*
         * Chromium likes to select label text or the default slot when
         * the checkbox is clicked. Maybe there is a better solution here?
         */ ''
      } user-select: none;
    }

    :host(.disabled) {
      opacity: ${disabledOpacity};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${disabledCursor};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${heightNumber} / 2) + ${designUnit}) * 2px);
      height: calc(((${heightNumber} / 2) + ${designUnit}) * 1px);
      background: ${neutralFillInputAltRest};
      border-radius: calc(${heightNumber} * 1px);
      border: calc(${strokeWidth} * 1px) solid ${neutralStrokeStrongRest};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${neutralFillInputAltHover};
      border-color: ${neutralStrokeStrongHover};
    }

    :host(:not(.disabled):active) .switch {
      background: ${neutralFillInputAltActive};
      border-color: ${neutralStrokeStrongActive};
    }

    :host(:${focusVisible}) .switch {
      box-shadow: 0 0 0 1px ${fillColor}, 0 0 0 3px ${focusStrokeOuter};
      background: ${neutralFillInputAltFocus};
      border-color: ${focusStrokeOuter};
    }

    :host(.checked) .switch {
      background: ${accentFillRest};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${accentFillHover};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${accentFillActive};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${neutralForegroundRest};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${neutralForegroundRest};
      cursor: pointer;
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${neutralForegroundRest};
      font-size: ${typeRampBaseFontSize};
      line-height: ${typeRampBaseLineHeight};
      margin-inline-end: calc(${designUnit} * 2px + 2px);
      cursor: pointer;
    }

    .status-message {
      margin-inline-start: calc(${designUnit} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${accentFillRest};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${foregroundOnAccentRest};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${accentFillHover};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${foregroundOnAccentHover};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${accentFillActive};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${foregroundOnAccentActive};
    }

    :host(.checked:${focusVisible}:not(.disabled)) .switch {
      box-shadow: 0 0 0 1px ${fillColor}, 0 0 0 3px ${focusStrokeOuter};
      border-color: transparent;
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(
    new DirectionalStyleSheetBehavior(
      css`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,
      css`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `,
    ),
    forcedColorsStylesheetBehavior(
      css`
        slot[name='switch'],
        :host(:not(.disabled)) .switch:active slot[name='switch'] {
          forced-color-adjust: none;
          background: ${SystemColors.FieldText};
        }
        .switch {
          forced-color-adjust: none;
          background: ${SystemColors.Field};
          border-color: ${SystemColors.FieldText};
        }
        :host(:not(.disabled)) .switch:hover {
          background: ${SystemColors.HighlightText};
          border-color: ${SystemColors.Highlight};
        }
        :host(.checked) .switch {
          background: ${SystemColors.Highlight};
          border-color: ${SystemColors.Highlight};
        }
        :host(.checked:not(.disabled)) .switch:hover,
        :host(:not(.disabled)) .switch:active {
          background: ${SystemColors.HighlightText};
          border-color: ${SystemColors.Highlight};
        }
        :host(.checked) slot[name='switch'] {
          background: ${SystemColors.HighlightText};
        }
        :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
          background: ${SystemColors.Highlight};
        }
        :host(:${focusVisible}) .switch {
          border-color: ${SystemColors.Highlight};
          box-shadow: 0 0 0 2px ${SystemColors.Field}, 0 0 0 4px ${SystemColors.FieldText};
        }
        :host(.checked:${focusVisible}:not(.disabled)) .switch {
          box-shadow: 0 0 0 2px ${SystemColors.Field}, 0 0 0 4px ${SystemColors.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          background: ${SystemColors.GrayText};
        }
        :host(.disabled) .switch {
          background: ${SystemColors.Field};
          border-color: ${SystemColors.GrayText};
        }
        .status-message,
        .label {
          color: ${SystemColors.FieldText};
        }
      `,
    ),
  );
