
export const getGifs = async(category) => {
    //encodeURI para limpiar la entrada ingresada de espacios o caracteres especiales
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=SByyVYXu7GC42Svh8OPQpV6oyxIK863R`;

    const respuesta = await fetch(url);
    //desestructuro del vector que recibo solo la data dentro de la data
    //el vector data contiene las imagenes que recibo de giphy
    const {data} = await respuesta.json();

    //rearmo el array que recibo solo con los datos que necesito que son
    //el id, el titulo y la url de las imagenes
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            //con el ? nos aseguramos que cargue el downsized_medium.url si
            //viene algo, sino viene nada lo descarta
            url: img.images?.downsized_medium.url
        }

    } );

    return gifs; //devuelve una promesa que va a contener los gifs en su then
};