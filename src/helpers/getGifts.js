const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=9OM3910xbqsUqcXTKmx61vQQxuEQgj0c`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => ({
        id: img.id,
        title: img.title?.trim(),
        url: img.images.downsized_medium.url
    }));

    return gifts;
}

export { getGifts };