import React from 'react';
import PokeSearchResult from '../components/PokeSearchResult/PokeSearchResult';
import SearchBox from '../components/SearchBox/SearchBox';
import Pokelist from '../Pokelist/Pokelist';
import { PokemonSchema } from '../types/PokemonSchema';
import './pokedex.css';

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
    selectedPokemon: PokemonSchema | undefined;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({ searchedPokemons, selectedPokemon, onInputChange, onPokemonClick }: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange} />
                <Pokelist
                    onPokemonClick={onPokemonClick}
                    searchedPokemons={searchedPokemons}
                />
            </div>
            <div className="pokesearchresult-container">
                {/*<p>Poke search result</p>*/}
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    )
}

export default Pokedex;