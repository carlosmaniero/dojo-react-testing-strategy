const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')
const port = 4200;
const pokedexDB = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';
const app = express();
app.use(cors());

let responseBody;

app.get('/', async (req, res) => {
    if (!responseBody) {
        console.log(`Fetching ${pokedexDB}`)
        const response = await fetch(pokedexDB);
        responseBody = await response.json();
    }

    res.send(responseBody.slice(0, 300).map((pokemon) => ({
        ...pokemon,
        sprite: `https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/${pokemon.id}.png`
    })));
});

app.listen(port, () => {
  console.log(`Pokédex backend listening at http://localhost:${port}`);
});