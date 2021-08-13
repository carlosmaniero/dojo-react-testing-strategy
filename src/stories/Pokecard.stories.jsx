import React from 'react';
import { Pokecard } from '../pokedex/pokecard/Pokecard'


export default {
  title: 'Pokedex/Pokecard',
  component: Pokecard,
};

const Template = (args) => <div style={{maxWidth: '250px'}}><Pokecard {...args} /></div>;

export const DefaultView = Template.bind({});
DefaultView.args = {
  pokemon: {
    "id": 1,
    "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
    },
    "type": [
        "Grass",
        "Poison"
    ],
    "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
    },
    "count": 5,
    "sprite": "https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/1.png"
  }
};