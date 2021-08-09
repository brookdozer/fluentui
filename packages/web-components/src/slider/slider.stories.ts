import { fluentSlider } from './index';

export default {
  title: 'Components/Slider',
  component: fluentSlider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

const SliderTemplate = ({ orientation }) => `
  <fluent-slider orientation="${orientation}" min="0" max="100" step="10">
    <fluent-slider-label position="0"> 0&#8451; </fluent-slider-label>
    <fluent-slider-label position="10"> 10&#8451; </fluent-slider-label>
    <fluent-slider-label position="90"> 90&#8451; </fluent-slider-label>
    <fluent-slider-label position="100"> 100&#8451; </fluent-slider-label>
  </fluent-slider>`;

export const Slider = SliderTemplate.bind({});

Slider.args = {
  orientation: 'horizontal',
};
