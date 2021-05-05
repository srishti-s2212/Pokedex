import React from 'react';
import './PokeSearchResult.css';

const PokeSearchResult = () => {
    const selectedPokemon = true;

    return (
        <div className="poke-result-card">
            {selectedPokemon
                ? (
                    <div>
                        <p> Name: Picker</p>
                        <p>Id: Some id</p>
                        <p>Height: some height</p>
                        <p>Weight: some weight</p>
                        <p>Base Exp: 100px</p>
                    </div>
                )
                : (
                    <h2>Welcome to Pokedex</h2>
                )
            }
        </div>
    );
};

export default PokeSearchResult;