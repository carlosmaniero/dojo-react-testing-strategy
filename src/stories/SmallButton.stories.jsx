import React from 'react';
import { SmallButton } from '../design-system/buttons/SmallButton';

export default {
  title: 'Design System/SmallButton',
  component: SmallButton,
};

const Template = (args) => <SmallButton {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  children: "+"
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "+",
  disabled: true,
};
