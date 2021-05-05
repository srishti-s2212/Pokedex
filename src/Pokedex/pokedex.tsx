import React from 'react';
import PokeSearchResult from '../components/PokeSearchResult/PokeSearchResult';
import './pokedex.css';

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>List of pokemon</p>
            </div>
            <div className="pokesearchresult-container">
                {/*<p>Poke search result</p>*/}
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;