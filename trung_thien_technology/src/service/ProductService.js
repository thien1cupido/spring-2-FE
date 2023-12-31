import axios from "axios";
import * as makeToken from '../MakeRequest';

export const findAllProductByPC = () => {
    const res = axios.get("http://localhost:8080/api/product/list/PC");
    return res;
}
export const findAllProduct = async (page, nameSearch) => {
    const res = await axios.get(`http://localhost:8080/api/product/list?page=${page}&nameSearch=${nameSearch}`);
    return res;
}
export const findAllProductAdmin = async (page, nameSearch) => {
    const res = await axios.get(`http://localhost:8080/api/admin/product/list?page=${page}&nameSearch=${nameSearch}`,
        {
            headers: {
                "Authorization": "Bearer " + await makeToken.getToken()
            }
        });
    return res;
}


export const findProductById = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/product/${id}`);
    return res;
}

export const findAllImageById = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/images/list/${id}`);
    return res;
}