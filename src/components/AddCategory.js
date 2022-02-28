import React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {

     //   console.log(e.target.value);
        setinputValue (e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault(); //para evitar el comportamiento por default del submit
                //del formulario que seria hacer el posteo y refrescar la pagina
                //es decir, recargar la pagina del navegador
        //console.log('Submit hecho');
        
        //valido el inputvalue

        if (inputValue.trim().length > 2)
        {
            //cats es el estado anterior, en este caso setCategories recibe una callback
            // con el estado anterior y en su cuerpo arma un nuevo vector con el estado
            // anterior y le agregar el nuevo valor
            //primero pongo inputValue para que primero aparezca la ultima categoria elegida
            setCategories (cats => [inputValue, ...cats]);
            setinputValue('');
        }


        


    }

    return (
    
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
