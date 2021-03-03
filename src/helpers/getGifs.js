

export const getGifs = async ( category ) => {
    //Encode URI es para evitar los espacios que se teclen
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category) }&limit=10&api_key=riMHimcWewhP6lPOOllmgGrqUg6aac4F`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
   return gifs;

}