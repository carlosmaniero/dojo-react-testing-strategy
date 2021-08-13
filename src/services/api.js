export const pokedex = () => fetch(`http://localhost:4200`)
    .then(response => response.json());

export const updateCount = (pokemonId, count) => 
    fetch(
        `http://localhost:4200/pokemon/${pokemonId}/updateCart`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body:  JSON.stringify({count: count}) 
        }
    ).then(response => response.json());