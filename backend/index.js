const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4200;
const pokedexDB = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json';
const app = express();
app.use(cors());
app.use(bodyParser.json());


let responseBody;
let cart = {

};

app.get('/', async (req, res) => {
    if (!responseBody) {
        console.log(`Fetching ${pokedexDB}`)
        const response = await fetch(pokedexDB);
        responseBody = await response.json();
    }

    res.send(responseBody.slice(0, 300).map((pokemon) => ({
        ...pokemon,
        count: cart[pokemon.id] || 0,
        sprite: `https://veekun.com/dex/media/pokemon/main-sprites/omegaruby-alphasapphire/${pokemon.id}.png`
    })));
});

app.post('/pokemon/:pokemonId/updateCart', (req, res) => {
    console.log(`Updating pokemon#${req.params.pokemonId} count=${req.body.count}`);
    cart[req.params.pokemonId] = req.body.count;
    res.send({})
});

app.listen(port, () => {
  console.log(`Pokédex backend listening at http://localhost:${port}`);
});