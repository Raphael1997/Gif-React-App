import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const { data: images, loading } = useFetchGifs(categoria);

    return (
        <>
            <h1>{categoria}</h1>
            {
                loading ? "Cargando..." : ""
            }
            {            <div className="card-grid">
                {
                    images.map((img) => {
                        return <GifGridItem {...img} key={img.id} />
                    })
                }
            </div>}
        </>

    )
}
