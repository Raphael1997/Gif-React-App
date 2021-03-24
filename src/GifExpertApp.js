import { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(["Shingeki no Kyojin"]);

    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr />
            
            <AgregarCategoria setCategoria={setCategorias} />
            {
                categorias.map(categoria => {
                    return <GifGrid key={categoria} categoria={categoria} />

                })
            }
        </div>
    )
}

export default GifExpertApp;