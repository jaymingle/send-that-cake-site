import axios from "axios";

//const baseUrl = 'https://sendthatcake.com/api';
const baseUrl = 'https://sendthatcake.com/labapi';
    let state ={}


const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const setState= (s) =>{
    state = s
}

export const makeRequest = (url, type, params, headers = {}) => {
    console.log("token iss", state.login)
    // const user = JSON.parse(localStorage.getItem('user'));
     const token = state.login.user?.token;
    // if(user && user.token) {
    //     token = user.token;
    // }
    console.log("thisURL",url);
    const options = {
        method: type,
        url: url,
        params: params,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
...headers
        }

    };
    // console.log("Options are ", options);
    if(['put', 'post', 'patch'].includes(type.toLowerCase())) {
        delete(options.params);
        options.data = params;
    }
    return axiosInstance(options);
    // const fullUrl = `${baseUrl}${url}`;
    // return fetch(fullUrl, options).then(response => {return response.json()})
}

