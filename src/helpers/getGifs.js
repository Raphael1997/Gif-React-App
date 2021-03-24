

export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6i2Bv6iXObZxp06ag96JhwuDv9cgi0Dq&q=${encodeURI(categoria)}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}