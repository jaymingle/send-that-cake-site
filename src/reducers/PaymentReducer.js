import { actions } from "../actions/paymentActions";

const initialState = {
    payments: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.getPayment:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
