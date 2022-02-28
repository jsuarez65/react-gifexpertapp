import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
  
    //const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);
    
    console.log(images);

    /*useEffect ( () => {

        //una funcion async devuelve una promesa
        //getGifs(category).then( imgs => setImages(imgs) );
        //tambien se puede poner como:
        getGifs(category).then( setImages );

    }, [category]); //si la lista de dependencias esta vacia, el useeffect solo se dispara una vez
        //es decir, que cuando la lista esta vacia [] estoy indicando que solo quiero que el 
        //componente se renderice cuando es llamado por primera vez
        //al agregarle la category elimino un warning y le informo que solo quiero
        //que se renderice el componente cuando cambie la category
    */


    //getGifs(); //la comento porque la llamo dentro del useEffect para que no se
            //renderice por cada que vez presiono el boton inc
        
    //al presionar boton inc se renderiza todo el componente
    //por eso vuelve a pedir todas las imagenes, para evitar
    //ese renderizado se usa useEffect
    return (
        <>
            <h3> { category } </h3>
            { loading && <p className='animate__animated animate__flash'>Cargando ...</p> }
            {/* <div className='card-grid'> 
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            /*img={ img }*/
                            // {...img} //con esto solo envio la imagenes, no un props img,
                                //entonces puedo desestructurar por title, id, url
/*                         />
                    ))
                }
             </div> */} 

            <div className='card-grid'> 
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            //img={ img }
                            {...img} //con esto solo envio la imagenes, no un props img,
                                //entonces puedo desestructurar por title, id, url
                         />
                    ))
                }
             </div>  

        </>
    )

}
