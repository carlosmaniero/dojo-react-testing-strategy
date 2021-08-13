import React from 'react';
import { Footer } from '../design-system/footer/Footer';

export default {
  title: 'Design System/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
};