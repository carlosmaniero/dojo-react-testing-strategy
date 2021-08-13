import React from 'react';
import { Card } from '../design-system/card/Card';
import { CardGrid } from '../design-system/card/CardGrid';

export default {
  title: 'Design System/Card/CardGrid',
  component: CardGrid,
};

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);


const Template = (args) => <CardGrid>
  {range(1, 20).map(number => <Card key={number}>Card Number #{number}</Card>)}
</CardGrid>;

export const DefaultView = Template.bind({});
DefaultView.args = {
};
