import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([])
    const { data: images, loading } = useFetchGifs( category );

    return (
        <React.Fragment>
            <h3 >{ category }</h3>
            { loading && <p className="animate__animated animate__pulse">Loading</p> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
