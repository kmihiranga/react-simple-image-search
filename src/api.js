import axios from 'axios';

const searchImages = async (term) => {
    const APP_KEY = '';

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${APP_KEY}`
        },
        params: {
            query: term
        }
    });

    console.log(response);
    return response.data.results;
};

export default searchImages;