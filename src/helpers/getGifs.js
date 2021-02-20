export const getGift = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dKkJHf5zWw4lN4u5mEqR99qqD5w4LZax&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => { 
        const gif = {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
        return gif
    });

    return gifs;
}