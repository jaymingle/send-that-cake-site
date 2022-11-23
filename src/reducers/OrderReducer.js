import { actions } from "../actions/orderActions";

const initialState = {
    gOrder: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.makeOrder:
            return { ...state, ...action.payload };
        case actions.getOrders:
            return { ...state, ...action.payload };
        case actions.getSinOrder:
            return { ...state, ...action.payload };
        case actions.updateOrder:
            return { ...state, ...action.payload };
        case actions.deleteOrder:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
