import axios from 'axios';

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 0Kk7qoAKyiaBrsVDTBjK-vNSXOHVIf2cW00AJ_NVm_I'
        },
        params: {
            query: searchTerm
        }
    });

    return response.data.results;
};

export default searchImages;