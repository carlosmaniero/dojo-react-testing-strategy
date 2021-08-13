export const pokedex = () => fetch(`http://localhost:4200`)
    .then(response => response.json());