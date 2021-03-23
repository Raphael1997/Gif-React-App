import { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
const GifExpertApp = () => {

    /* const categorias = ["One Punch", "One Piece", "Bleach", "Shingeki no Kyojin", "Dragon Ball Z"] */

    const [categorias, setCategorias] = useState(["One Punch", "One Piece", "Bleach", "Shingeki no Kyojin", "Dragon Ball Z"]);

    /*    const handleAdd = (e) => {
           setCategorias(state => [...state, "Death Note"])
       } */
    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />

            <AgregarCategoria setCategoria={setCategorias} />
            <ol>
                {
                    categorias.map(categoria => {
                        return <li key={categoria}>{categoria}</li>

                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;