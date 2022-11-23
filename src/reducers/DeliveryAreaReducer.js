import { actions } from "../actions/deliveryAreaActions";

const initialState = {
    delivery: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.addDeliveryArea:
        case actions.getDeliveryArea:
        case actions.getSinDeliveryArea:
        case actions.updateDeliveryArea:
        case actions.deleteDeliveryArea:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
