import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import { addToCart } from "./cartActions";

// ----------EXPORT ACTIONS

export const actions = {
    getOrders: "getOrders",
    makeOrder: "makeOrder",
    getSinOrder: "sinOrder",
    updateOrder: "updateOrder",
    deleteOrder: "deleteOrder",
};

// ------------------DISPATCH METHODS

export const getOrder = (gOrder) => {
    return {
        type: actions.getOrders,
        payload: {getOrders: gOrder},
    };
};

export const getSinOrder = (gSinOrder) => {
    return {
        type: actions.getSinOrder,
        payload: gSinOrder,
    };
};
export const updateOrder = (upOrder) => {
    return {
        type: actions.updateOrder,
        payload: upOrder,
    };
};
export const deleteOrder = (delo) => {
    return {
        type: actions.updateOrder,
        payload: delo,
    };
};

// ----------------------END DISPATCH METHODS

export const getOrderAsync = () => {
    return (dispatch) => {
        return makeRequest(`orders`, "get", {})
            .then((getO) => {
                return dispatch(getOrder(getO.data.data));
            })
            .catch((error) => {});
    };
};

export const makeOrderAsync = (data) => {
    console.log("Mke Order Async");
    return (dispatch) => {
        return makeRequest("orders", "post", data, {})
            .then((postO) => {
                console.log("OrderSucces?", data);
                return dispatch(addToCart([]));
            })
            .catch((error) => {});
    };
};

export const getSinOrderAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}`, "get", {})
            .then((sinOrder) => {
                return dispatch(getSinOrder(sinOrder.data.data));
            })
            .catch((error) => {});
    };
};

export const updateOrderAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}`, "put", id, {})
            .then((upO) => {
                return dispatch(updateOrder(upO.data.data));
            })
            .catch((error) => {});
    };
};
export const deleteOrderAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`orders/${id}`, "delete", id, {})
            .then((delOrder) => {
                return dispatch(deleteOrder(delOrder.data.data));
            })
            .catch((error) => {});
    };
};
