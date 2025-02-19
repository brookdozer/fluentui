import { css, ElementStyles } from '@microsoft/fast-element';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  display,
  ElementDefinitionContext,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import { heightNumber } from '../../styles';
import {
  bodyFont,
  controlCornerRadius,
  density,
  designUnit,
  focusStrokeOuter,
  focusStrokeWidth,
  neutralForegroundRest,
  strokeWidth,
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
} from '../../design-tokens';

export const tabStyles: (context: ElementDefinitionContext, definition: FoundationElementDefinition) => ElementStyles =
  (context: ElementDefinitionContext, definition: FoundationElementDefinition) =>
    css`
      ${display('inline-flex')} :host {
        box-sizing: border-box;
        font-family: ${bodyFont};
        font-size: ${typeRampBaseFontSize};
        font-weight: 400;
        line-height: ${typeRampBaseLineHeight};
        height: calc((${heightNumber} + (${designUnit} * 2)) * 1px);
        padding: 0 calc((6 + (${designUnit} * 2 * ${density})) * 1px);
        color: ${neutralForegroundRest};
        border-radius: calc(${controlCornerRadius} * 1px);
        border: calc(${strokeWidth} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
        outline: none;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${neutralForegroundRest};
      }

      :host(:${focusVisible}) {
        border-color: ${focusStrokeOuter};
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${focusStrokeOuter} inset;
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${neutralForegroundRest};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(
      forcedColorsStylesheetBehavior(
        css`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${SystemColors.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: ${SystemColors.Highlight};
            color: ${SystemColors.HighlightText};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: ${SystemColors.HighlightText};
            color: ${SystemColors.Highlight};
            fill: currentcolor;
          }
          :host(:${focusVisible}) {
            border-color: ${SystemColors.ButtonText};
            box-shadow: none;
          }
        `,
      ),
    );
