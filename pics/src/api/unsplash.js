import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID hB_7hoYVz8FrHjgsGgRPfMhi_ruDT_PD5e1Ec2ip19w'
    }
})