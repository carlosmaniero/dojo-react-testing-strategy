import React from 'react';
import { Card } from '../design-system/card/Card';

export default {
  title: 'Design System/Card/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  children: "Hello You"
};
