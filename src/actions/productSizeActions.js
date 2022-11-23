import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    addProductSize: "postProductSize",
    getProductSize: "getProductSize",
    updateProductSize: "updateProductSize",
    deleteProductSize: "deleteProductSize",
    getSinProductSize: "getSinProductSize",
};

export const addProductSize = (data) => {
    return {
        type: actions.addProductSize,
        payload: { prodSize: data },
    };
};

export const getProductSize = (prodsize) => {
    return {
        type: actions.getProductSize,
        payload: { prodSize: prodsize },
    };
};

export const getSinProductSize = (sinPSize) => {
    return {
        type: actions.getSinProductSize,
        payload: { prodSiS: sinPSize },
    };
};

export const updateProductSize = (data) => {
    return {
        type: actions.updateProductSize,
        payload: {prodSize: data},
    };
};

export const deleteProductSize = (userProductSize) =>{
    return {
        type: actions.postProductSize,
        payload: {prodSize: userProductSize},
    }
}

export const addProductSizeAsync = (data) => {
    return (dispatch) => {
        return makeRequest("product-sizes", "post", data, {})
            .then((addpS) => {
                return dispatch(addProductSize(addpS.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating ProductSize");

                // }
                // else{
                //     console.log("Failed to create ProductSize");
                // }
            })
            .catch((error) => {});
    };
};


export const getProductSizeAsync = (data) => {
    return (dispatch) => {
        return makeRequest("product-sizes", "get", data, {})
            .then((getS) => {
                return dispatch(getProductSize(getS.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinProductSizeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-sizes/${id}`, "get", id, {})
            .then((getSinS) => {
                return dispatch(getSinProductSize(getSinS.data.data));
            })
            .catch((error) => {});
    };
};

export const updateProductSizeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-sizes/${id}`, "put", id, {})
            .then((upProductSize) => {
                return dispatch(updateProductSize(upProductSize.data.data));
            })
            .catch((error) => {});
    };
};

export const deleteProductSizeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-sizes/${id}`, "delete", id, {})
            .then((delProductSize) => {
                return dispatch(deleteProductSize(delProductSize.data.data));
            })
            .catch((error) => {});
    };
};
