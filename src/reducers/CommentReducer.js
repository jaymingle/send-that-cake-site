import { actions } from "../actions/commentActions";

const initialState = {
    userSinC: [],
    userC: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.postComment:
            return { ...state, ...action.payload };
        case actions.getComment:
            return { ...state, ...action.payload };
        case actions.getSinComment:
            return { ...state, ...action.payload };
        case actions.updateComment:
            return { ...state, ...action.payload };
        case actions.deleteComment:
            return { ...state, ...action.payload };
        default:
            return  state ;    }
};

export default reducer;
