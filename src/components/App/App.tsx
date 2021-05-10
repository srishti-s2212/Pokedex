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

    handleInputChange = (inputValue: string) => {
        //console.log(`Input valye from App.tsx is: ${inputValue}`);
        const { allPokemons } = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                );
            }
        );
        this.setState({
            searchField: inputValue,
            searchPokemons: searchedPokemons
        })

    }

    handleClick = (pokemonName: string) => {
        const { allPokemons } = this.state;

        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName

        );
        this.setState({ selectedPokemon });
    }
    render() {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex
                    searchedPokemons={this.state.searchPokemons}
                    selectedPokemon={this.state.selectedPokemon}
                    onInputChange={this.handleInputChange}
                    onPokemonClick={this.handleClick}
                />
            </div>
        );
    };
};

export default App;