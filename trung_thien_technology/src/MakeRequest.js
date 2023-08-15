import axios from "axios";

export const makeRequest = axios.create({
    baseURL:   'http://localhost:8080',
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    },
});