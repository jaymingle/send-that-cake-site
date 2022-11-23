import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    addProductCategory: "postProductCategory",
    getProductCategory: "getProductCategory",
    updateProductCategory: "updateProductCategory",
    deleteProductCategory: "deleteProductCategory",
    getSinProductCategory: "getSinProductCategory",
};

export const addProductCategory = (data) => {
    return {
        type: actions.addProductCategory,
        payload: { prodCat: data },
    };
};

export const getProductCategory = (prodcat) => {
    return {
        type: actions.getProductCategory,
        payload: { prodCat: prodcat },
    };
};

export const getSinProductCategory = (sinPSize) => {
    return {
        type: actions.getSinProductCategory,
        payload: { prodCatS: sinPSize },
    };
};

export const updateProductCategory = (data) => {
    return {
        type: actions.updateProductCategory,
        payload: {prodCat: data},
    };
};

export const deleteProductCategory = (userProductCategory) =>{
    return {
        type: actions.postProductCategory,
        payload: {prodCat: userProductCategory},
    }
}

export const addProductCategoryAsync = (data) => {
    return (dispatch) => {
        return makeRequest("product-categories", "post", data, {})
            .then((addpS) => {
                return dispatch(addProductCategory(addpS.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating ProductCategory");

                // }
                // else{
                //     console.log("Failed to create ProductCategory");
                // }
            })
            .catch((error) => {});
    };
};


export const getProductCategoryAsync = (data) => {
    return (dispatch) => {
        return makeRequest("product-categories", "get", data, {})
            .then((getCa) => {
                return dispatch(getProductCategory(getCa.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinProductCategoryAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-categories/${id}`, "get", id, {})
            .then((getSinC) => {
                return dispatch(getSinProductCategory(getSinC.data.data));
            })
            .catch((error) => {});
    };
};

export const updateProductCategoryAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-categories/${id}`, "put", id, {})
            .then((upCat) => {
                return dispatch(updateProductCategory(upCat.data.data));
            })
            .catch((error) => {});
    };
};

export const deleteProductCategoryAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`product-categories/${id}`, "delete", id, {})
            .then((delProductCategory) => {
                return dispatch(deleteProductCategory(delProductCategory.data.data));
            })
            .catch((error) => {});
    };
};
