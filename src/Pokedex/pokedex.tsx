import React from 'react';
import PokeSearchResult from '../components/PokeSearchResult/PokeSearchResult';
import SearchBox from '../components/SearchBox/SearchBox';
import Pokelist from '../Pokelist/Pokelist';
import './pokedex.css';

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <Pokelist />
            </div>
            <div className="pokesearchresult-container">
                {/*<p>Poke search result</p>*/}
                <PokeSearchResult />
            </div>
        </div>
    )
}

export default Pokedex;