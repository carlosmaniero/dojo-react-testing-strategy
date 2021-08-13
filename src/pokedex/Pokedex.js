import { useEffect, useState } from 'react';
import {pokedex} from '../services/api';
import {Pokecard} from './pokecard/Pokecard';
import {CardGrid} from '../design-system/card/CardGrid';

export const Pokedex = ({fetch}) => {
    const fetchFn = fetch || pokedex;
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetchFn().then((data) => {
            setPokemon(data);
        });
    }, []);

    if (pokemon) {
        return <CardGrid>
            {pokemon.map((pokemonItem) => <Pokecard key={pokemonItem.id} pokemon={pokemonItem} />)}
        </CardGrid>
    }

    return <div>
        Loading Pokédex...
    </div>;
}