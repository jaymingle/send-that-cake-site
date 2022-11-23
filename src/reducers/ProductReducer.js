import { actions } from "../actions/productActions";

const initialState = {
    product: [],
    prod: [],
    vat: 0.125,
    deliveryPhone:"",
    deliveryLandMark:"",
    deliveryHseNo:"",
    productdelivery: {},
    productdeliveryT: new Date(),
    delivery: [],
    textOnCake:"",
       
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.createProduct:
        case actions.getProductLocation:
        case actions.getDeliveryTime:
        case actions.getDeliveryPhone:
        case actions.getDeliveryEmail:
        case actions.getDeliveryLandMark:
        case actions.getDeliveryHseNo:
        case actions.getTextOnCake:
        case actions.getProduct:
        case actions.getSinProduct:
        case actions.updateProduct:
        case actions.getProductComments:
        case actions.getProductLikes:
        case actions.deleteProduct:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
