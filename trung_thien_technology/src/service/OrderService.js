import axios from "axios";
import * as makeToken from "../MakeRequest";

export const findAllOrder = async (page) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/order/list?page=${page}`,
            {
                headers: {
                    "Authorization": "Bearer " + await makeToken.getToken()
                }
            })
        return res;
    } catch (e) {
        console.log(e)
    }
}

export const findAllOrderDetail = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/order-detail/list/${id}`,
            {
                headers: {
                    "Authorization": "Bearer " + await makeToken.getToken()
                }
            })
        console.log(res.data)
        return res;
    } catch (e) {
        console.log(e)
    }
}

export const createOrder = async (shoppingCart) => {
    try {
        await axios.post("http://localhost:8080/api/order/save-order",shoppingCart,
            {
                headers: {
                    "Authorization": "Bearer " + await makeToken.getToken()
                }
            })
    } catch (e) {
        console.log(e)
    }
}