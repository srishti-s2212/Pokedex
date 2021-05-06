import React from 'react';
import { pokemonData } from '../../data/pokemonData';
import Pokedex from '../../Pokedex/pokedex';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/PokemonSchema';
import './App.css';

interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

{/*interface Play{
    name: string;
} */}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchPokemons: [],
        selectedPokemon: undefined
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };
            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            }
            catch (e) {
                console.log("Exception while parsing the sprites:", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            };

            return patchedPokemon;
        });
        return patchedPokemons;
    };

    componentDidMount() {
        //const pokeData = pokemonData;
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

        //update the state with the patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchPokemons: patchedPokemons,
        });

    }
    render() {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex />
            </div>
        );
    };
};

export default App;