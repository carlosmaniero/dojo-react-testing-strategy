import React from 'react';
import { Page } from '../design-system/page/Page';

export default {
  title: 'Design System/Page',
  component: Page,
};

const Template = (args) => <Page {...args}><div style={{textAlign: 'center'}}>{args.children}</div></Page>;

export const DefaultView = Template.bind({});
DefaultView.args = {
    children: 'Hello, World!'
};