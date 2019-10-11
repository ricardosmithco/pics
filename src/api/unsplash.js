import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {Authorization: 'Client-ID 7f36325a9bce5467371cae58a4faaa7442d904ea4b84e0495b2339386b5b4e2a'}
});