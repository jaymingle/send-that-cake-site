import { actions } from "../actions/vendorActions";

const initialState = {
    vendor: [],
    vendors: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.updateVendor:
            return { ...state, ...action.payload };
        case actions.getVendor:
            return { ...state, ...action.payload };
        case actions.getSinVendor:
            return { ...state, ...action.payload };
        // case actions.updateVendor:
        //     return { ...state, ...action.payload };
        // case actions.getVendorProfilePic:
        //     return { ...state, ...action.payload };
        case actions.deleteVendor:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
