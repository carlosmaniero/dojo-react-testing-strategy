import React from 'react';
import { Counter } from '../design-system/counter/Counter';
import { action } from '@storybook/addon-actions';


export default {
  title: 'Design System/Counter/Counter',
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const MinDisabled = Template.bind({});

MinDisabled.args = {
  max: 2,
  min: 0,
  value: 0,
  onChange: action('changed')
};

export const AllEnabled = Template.bind({});

AllEnabled.args = {
  max: 2,
  min: 0,
  value: 1,
  onChange: action('changed')
};

export const MaxDisabled = Template.bind({});

MaxDisabled.args = {
  max: 2,
  min: 0,
  value: 2,
  onChange: action('changed')
};

