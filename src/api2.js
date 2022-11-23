import axios from "axios";

const baseUrl = 'https://api.paystack.co/';
    let state ={}


const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const setState= (s) =>{
    state = s
}

export const makePayStackRequest= (url, type, params, headers = {}) => {
    
    console.log("thisURL",url);
    const options = {
        method: type,
        url: url,
        params: params,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Authorization: Bearer sk_test_01e2f72e34cbf3befb0490fc178028154e225f94',
...headers
        }

    };
    // console.log("Options are ", options);
    if(['put', 'post', 'patch'].includes(type.toLowerCase())) {
        delete(options.params);
        options.data = params;
    }
    return axiosInstance(options);
    
}

