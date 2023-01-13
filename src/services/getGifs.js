const apiKey = '2dUAZvEQbxj7HK3UfYr8Y1nLQ2NJAYcq'




export default function getGifs({keyword = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=11&offset=0&rating=g&lang=en`

    return fetch(apiUrl).then(res => res.json())
        .then(response => {
            const {
                data = []
            } = response
            if (Array.isArray(data)) {
             const gifs = data.map(image => {
                const {images,title,id} = image
                const {url} = image.images.downsized_medium
                return {title, id, url}
             })
             return gifs
            }

        })
}