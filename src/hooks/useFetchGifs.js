import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria).then(resp => {
            setstate({
                data: resp,
                loading: false
            });
        })
    }, [categoria]);
    return state; // es la data
}