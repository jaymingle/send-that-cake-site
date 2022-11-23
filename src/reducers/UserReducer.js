import { actions } from "../actions/userActions";

const initialState = {
    // role: "Administrator",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.updateUser:
            return { ...state, ...action.payload };
        case actions.getUser:
            return { ...state, ...action.payload };
        case actions.getSinUser:
            return { ...state, ...action.payload };
        // case actions.updateUser:
        //     return { ...state, ...action.payload };
        case actions.getUserProfilePic:
            return { ...state, ...action.payload };
        case actions.deleteUser:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
