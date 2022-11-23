import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import Noty from "noty";

//EXPORT ACTIONS

export const actions = {
    addToCart: "addToCart",
    getCart: "getCart",
    updateCart: "updateCart",
    deleteCart: "deleteCart",
    getSinCart: "getSinCart",
    deleteCartOffline: "deleteCartOffline",
};

export const addToCart = (data) => {
    return {
        type: actions.addToCart,
        payload: { cart: data },
    };
};



export const getSinCart = (sinCart) => {
    return {
        type: actions.getSinCart,
        payload: { crt: sinCart },
    };
};

// export const deleteCartOffline = (id) => {

//     return {
//         type: actions.deleteCartOffline,
//         payload: { cart: id },
//     };
// };




export const addToCartAsync = (data) => {
    return (dispatch) => {
        return makeRequest("cart/", "post", data, {})
            .then((addToC) => {
                console.log("add to cart async", data, addToC)
                alert(addToC.data.data.name + "will be added to your cart")
                return dispatch(getCartAsync(addToC.data.data));
                
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating Cart");

                // }
                // else{
                //     console.log("Failed to addTo Cart");
                // }
            })
            .catch((error) => {});
    };
};


export const getCartAsync = () => {
    return (dispatch) => {
        return makeRequest("cart/", "get", {}, {})
            .then((getC) => {
                const cart = getC.data.data.map(ci=>{
                    const p = ci.product;
                    p.quantity = ci.quantity;
                    p.cartId = ci.id;
                    return p;
                })
                return dispatch(addToCart(cart));
            })
            .catch((error) => {});
    };
};

export const updateCartAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`cart/${id}`, "put", {}, {})
            .then((getC) => {
                return dispatch(getCartAsync());
            })
            .catch((error) => {});
    };
};


export const getSinCartAsync = (user) => {
    return (dispatch) => {
        return makeRequest(`cart/${user}/`, "get", user, {})
            .then((getSinC) => {
                return dispatch(getSinCart(getSinC.data.data));
            })
            .catch((error) => {});
    };
};


export const deleteCartAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`cart/${id}`, "delete", {})
            .then((delCart) => {
                console.log("Delete Successful")
                return dispatch(getCartAsync());
            })
            .catch((error) => {});
    };
};
