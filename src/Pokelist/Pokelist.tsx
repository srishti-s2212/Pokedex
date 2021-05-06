import React from 'react';
import Pokecard from '../components/Pokecard/Pokecard';
import './Pokelist.css';

const Pokelist = () => {
    return (
        <div className="pokelist" >
            {/* <p>Pokemon1</p>*/}
            {/* <p>Pokemon2</p>*/}
            <Pokecard name="pikachu" />
            <Pokecard name="jigglypuff" />
            <Pokecard name="bulbasaur" />
            <Pokecard name="charlizard" />
            <Pokecard name="meowth" />
        </div>
    );
};
export default Pokelist;