import { render, screen } from "@testing-library/react";
import { Pokecard } from "./Pokecard";

describe('Pokecard', () => {
    const pokemon = {
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
    };        

    it('renders pokemon basic information', () => {
        render(<Pokecard pokemon={pokemon} />);
        expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('フシギダネ')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByAltText('Bulbasaur sprite')).toHaveAttribute('src', pokemon.sprite);
    });

    it('increases the counter', () => {
        render(<Pokecard pokemon={{...pokemon, count: 9}} />);

        screen.getByLabelText('Increase cart').click();
        expect(screen.getByText('10')).toBeInTheDocument();

        screen.getByLabelText('Increase cart').click();
        expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('decrease the counter', () => {
        render(<Pokecard pokemon={{...pokemon, count: 1}} />);

        screen.getByLabelText('Decrease cart').click();
        expect(screen.getByText('0')).toBeInTheDocument();

        screen.getByLabelText('Decrease cart').click();
        expect(screen.getByText('0')).toBeInTheDocument();
    });
});