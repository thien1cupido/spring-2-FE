import * as makeToken from '../MakeRequest';
import axios from "axios";

export const getAllShoppingCart = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/shopping-cart/list",
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
export const saveShoppingCart = async (shoppingCart) => {
    try {
        await axios.post("http://localhost:8080/api/shopping-cart/save",shoppingCart,
            {
                headers: {
                    "Authorization": "Bearer " + await makeToken.getToken()
                }
            })
    } catch (e) {
        console.log(e)
    }
}
export const paymentPayPal = async (shoppingCart) => {
    console.log(shoppingCart)
    try {
        await axios.post("http://localhost:8080/api/order/save",shoppingCart,
            {
                headers: {
                    "Authorization": "Bearer " + await makeToken.getToken()
                }
            })
    } catch (e) {
        console.log(e)
    }
}

