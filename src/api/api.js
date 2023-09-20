import axios from 'axios';

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchData = async (endpoint) => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}${endpoint}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchTopAlbums = async () => fetchData("/albums/top");
export const fetchNewAlbums = async () => fetchData("/albums/new");
