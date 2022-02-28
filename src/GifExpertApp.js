import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//con el snippet rafc de vbcode te crea el esqueleto


const GifExpertApp = () => {

    //el problema es como informo que cambia este vector? por eso necesito
    //usar un hook state
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState (['One Punch']);

/*     const handleAdd = () => {
        //HunterXHunter
        //con el operador spread (...) utilizo el vector de categorias y le agrego
        //un nuevo elemento (el elemento HunterXHunter)
        setCategories( [...categories, 'HunterXHunter']);
    }; */


    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>

        <hr />

        <ol> {
            categories.map (category => (
                //<li key={category}> {category} </li>
                <GifGrid 
                    key = {category}
                    category = {category} 
                />
            ))
            }
        </ol>
        </>


    )


};

export default GifExpertApp;
