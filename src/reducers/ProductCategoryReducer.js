import { actions } from "../actions/productCategoryActions";

const initialState = {
    prodCat: [],
    prodCatS: [],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.addProductCategory:
            return { ...state, ...action.payload };
        case actions.getProductCategory:
            return { ...state, ...action.payload };
        case actions.getSinProductCategory:
            return { ...state, ...action.payload };
        case actions.updateProductCategory:
            return { ...state, ...action.payload };
        case actions.deleteProductCategory:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
