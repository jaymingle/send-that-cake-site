import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    createProduct: "createProduct",
    getProduct: "getProduct",
    getProductLocation: "getProductLocation",
    getDeliveryTime: "getDeliveryTime",
    getDeliveryPhone: "getDeliveryPhone",
    getDeliveryEmail: "getDeliveryEmail",
    getDeliveryLandMark: "getDeliveryLandMark",
    getDeliveryHseNo: "getDeliveryHseNo",
    getTextOnCake: "getTextOnCake",
    updateProduct: "updateProduct",
    deleteProduct: "deleteProduct",
    getSinProduct: "getSinProduct",
    getProductComments: "getProductComments",
    getProductLikes: "getProductLikes",
};

export const createProduct = (data) => {
    return {
        type: actions.createProduct,
        payload: { prod: data },
    };
};

export const getProduct = (products) => {
    return {
        type: actions.getProduct,
        payload: { product: products },
    };
};
export const productDelivery = (location) => {
    return {
        type: actions.getProductLocation,
        payload: { productdelivery: location },
    };
};
export const deliveryTime = (date) => {
    console.log("DeliveryTIme", date);
    return {
        type: actions.getDeliveryTime,
        payload: { productdeliveryT: date },
    };
};
export const deliveryPhone = (phone) => {
    console.log("deliveryPhone", phone);
    return {
        type: actions.getDeliveryPhone,
        payload: { deliveryPhone: phone },
    };
};
export const deliveryEmail = (email) => {
    console.log("deliveryemail", email);
    return {
        type: actions.getDeliveryEmail,
        payload: { deliveryEmail: email },
    };
};
export const deliveryLandMark = (landmark) => {
    // console.log("deliveryLandMark", landmark);
    return {
        type: actions.getDeliveryLandMark,
        payload: { deliveryLandMark: landmark },
    };
};
export const deliveryHseNo = (houseno) => {
    console.log("deliveryHouseNo", houseno);
    return {
        type: actions.getDeliveryHseNo,
        payload: { deliveryHseNo: houseno },
    };
};
export const textOnCake = (text) => {
    console.log("textOnCake", text);
    return {
        type: actions.getTextOnCake,
        payload: { textOnCake: text },
    };
};

export const getSinProduct = (sinProduct) => {
    return {
        type: actions.getSinProduct,
        payload: { prod: sinProduct },
    };
};

export const updateProduct = (data) => {
    return {
        type: actions.updateProduct,
        payload: {prod: data},
    };
};

export const getProductComments = (prodc) =>{
    return {
        type: actions.getProductComments,
        payload: {prod: prodc},
    }
}
export const getProductLikes = (prodl) =>{
    return {
        type: actions.getProductLikes,
        payload: {prod: prodl},
    }
}
export const deleteProduct = (delp) =>{
    return {
        type: actions.deleteProduct,
        payload: {prod: delp},
    }
}



export const createProductAsync = (data) => {
    return (dispatch) => {
        return makeRequest("products", "post", data, {})
            .then((createP) => {
                return dispatch(createProduct(createP.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating Product");

                // }
                // else{
                //     console.log("Failed to create Product");
                // }
            })
            .catch((error) => {});
    };
};


export const getProductAsync = () => {
    return (dispatch) => {
        
        return makeRequest("products", "get", {}, {})
            .then((getP) => {
                console.log("GetProdFront")
                return dispatch(getProduct(getP.data.data));
            })
            .catch((error) => {console.log("GetPRodFrontERr")});
    };
};


export const getSinProductAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}`, "get")
            .then((getSinP) => {
                console.log("SingleasSingle",getSinP)
                 return dispatch(getSinProduct(getSinP.data.data));
            })
            .catch((error) => {});
    };
};


export const getProductCommentsAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}/comments`, "get", id, {})
            .then((getPCom) => {
                return dispatch(getProductComments(getPCom.data.data));
            })
            .catch((error) => {});
    };
};

export const getProductLikesAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}/likes`, "get", id, {})
            .then((getPL) => {
                return dispatch(getProductLikes(getPL.data.data));
            })
            .catch((error) => {});
    };
};

export const updateProductAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}`, "put", id, {})
            .then((upProduct) => {
                return dispatch(updateProduct(upProduct.data.data));
            })
            .catch((error) => {});
    };
};


export const deleteProductAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`products/${id}`, "delete", id, {})
            .then((delProduct) => {
                return dispatch(deleteProduct(delProduct.data.data));
            })
            .catch((error) => {});
    };
};
