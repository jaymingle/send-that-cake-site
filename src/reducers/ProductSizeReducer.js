import { actions } from "../actions/productSizeActions";

const initialState = {
   prodSize: [],
   prodSiS: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.addProductSize:
            return { ...state, ...action.payload };
        case actions.getProductSize:
            return { ...state, ...action.payload };
        case actions.getSinProductSize:
            return { ...state, ...action.payload };
        case actions.updateProductSize:
            return { ...state, ...action.payload };
        case actions.deleteProductSize:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
