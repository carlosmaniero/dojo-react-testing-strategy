import React from 'react';
import { Header } from '../design-system/header/Header';

export default {
  title: 'Design System/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
};