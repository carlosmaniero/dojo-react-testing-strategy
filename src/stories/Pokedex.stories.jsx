import React from 'react';
import { Pokedex } from '../pokedex/Pokedex'

const pokemon = [
    {
        "id": 1,
        "name": {
            "english": "Bulbasaur",
            "japanese": "フシギダネ",
            "chinese": "妙蛙种子",
            "french": "Bulbizarre"
        },
        "count": 5,
        "sprite": "https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/1.png"
    },
    {
        "id": 25,
        "name": {
            "english": "Pikachu",
            "japanese": "ピカチュウ",
            "chinese": "皮卡丘",
            "french": "Pikachu"
        },
        "count": 0,
        "sprite": "https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/25.png"
    }
];

export default {
  title: 'Pokedex/Pokedex',
  component: Pokedex,
};

const Template = (args) => <Pokedex {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  fetch: () => Promise.resolve(pokemon)
};

export const LoadingView = Template.bind({});
LoadingView.args = {
  fetch: () => new Promise(() => {})
};