import React from 'react';
import { SmallButton } from '../design-system/buttons/SmallButton';

import { Header } from './Header';

export default {
  title: 'Design System/SmallButton',
  component: SmallButton,
};

const Template = (args) => <SmallButton {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  children: "+"
};
