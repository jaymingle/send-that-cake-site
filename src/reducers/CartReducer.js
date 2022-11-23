import { actions } from "../actions/cartActions";

const initialState = {
    cart: [],
    // prod: [],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.addToCart:
            return { ...state, ...action.payload };
        // case actions.getCart:
        //     return { ...state, ...action.payload };
        case actions.getSinCart:
            return { ...state, ...action.payload };
        case actions.updateCart:
        //     return { ...state, ...action.payload };
        // case actions.deleteCartOffline:
            return { ...state, ...action.payload };
        case actions.deleteCart:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
