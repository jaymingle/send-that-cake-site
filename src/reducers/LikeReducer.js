import { actions } from "../actions/likeActions";

const initialState = {
    userL: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.postLikes:
            return { ...state, ...action.payload };
        case actions.getLike:
            return { ...state, ...action.payload };
        case actions.getSinLikes:
            return { ...state, ...action.payload };
        case actions.updateLike:
            return { ...state, ...action.payload };
        case actions.deleteLikes:
            return { ...state, ...action.payload };
        default:
            return state ;
    }
};

export default reducer;
