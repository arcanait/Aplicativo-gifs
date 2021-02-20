import { useEffect, useState } from "react";
import { getGift } from '../helpers/getGifs';
export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGift( category )
            .then( images => {
                setTimeout(() => {
                    setstate({
                        data: images,
                        loading: false
                    })
                }, 3000 )
            });
    }, [ category ])

    console.log(state.data)

    return state;

}