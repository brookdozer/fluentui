import { fluentButton } from './index';

export default {
  title: 'Components/Button',
  component: fluentButton,
  argTypes: {
    appearance: {
      description: 'This controls the basic appearances',
      control: { type: 'select' },
      options: ['neutral', 'accent', 'lighweight', 'outline', 'stealth'],
      default: 'neutral',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const ButtonTemplate = ({ appearance, disabled, label }) =>
  `
    <fluent-button 
      ${disabled ? 'disabled' : ''} 
      ${appearance ? `appearance="${appearance}"` : ''}
    >
      ${label}
    </fluent-button>
  `;

export const Button = ButtonTemplate.bind({});

Button.args = {
  label: 'Button',
  appearance: 'neutral',
};

const example = `
<fluent-button>Button</fluent-button>
`;

Button.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};
