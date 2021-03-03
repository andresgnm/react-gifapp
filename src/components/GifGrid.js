import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    /*Custom hook
        Forma de extraer logica de algun componente o logica que quiero reutilizar de forma sencilla   */
       const { data:images, loading} = useFetchGifs( category );

    // UseEfect lo que realiza esta funcion es que se ejecuta solamente cuanto es 
    //renderizado por primera vez gracias al arreglo de dependencias vacio
    

   
    return (
        <>
            <h3 className ="animate__animated animate__shakeX" > {category} </h3>
            { loading && <p className ="animate__animated animate__flash">Loading</p> }
            <div className = "card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img} //se envia como una propiedad independiente y lo hace mas facil de trabajar
                        />
                    ))
                }
                
            </div>
        </>
    )

}
