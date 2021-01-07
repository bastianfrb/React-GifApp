export const getGifs = async(category) => {

    const apiUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'sUTfO7y4PU9wl7g9svwRBkAgGftRMGQW';
    const limit = 10;
    const query = encodeURI(category);

    const url = `${apiUrl}?api_key=${apiKey}&limit=${limit}&q=${query}`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
};