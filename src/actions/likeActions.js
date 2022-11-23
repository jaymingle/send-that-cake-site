import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    postLikes: "postLike",
    getLike: "getLike",
    updateLike: "updateLike",
    deleteLikes: "deleteLike",
    getSinLikes: "getSinLike",
};

export const postLike = (data) => {
    return {
        type: actions.postLike,
        payload: { userL: data },
    };
};

export const getLike = (likes) => {
    return {
        type: actions.getLike,
        payload: { userL: likes },
    };
};

export const getSinLike = (sinLike) => {
    return {
        type: actions.getSinLike,
        payload: { userSinL: sinLike },
    };
};

export const updateLike = (data) => {
    return {
        type: actions.updateLike,
        payload: {userL: data},
    };
};

export const deleteLike = (userLike) =>{
    return {
        type: actions.postLike,
        payload: {userC: userLike},
    }
}

export const postLikeAsync = (data) => {
    return (dispatch) => {
        return makeRequest("likes", "post", data, {})
            .then((postL) => {
                return dispatch(postLike(postL.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating Like");

                // }
                // else{
                //     console.log("Failed to create Like");
                // }
            })
            .catch((error) => {});
    };
};


export const getLikeAsync = (data) => {
    return (dispatch) => {
        return makeRequest("likes", "get", data, {})
            .then((getL) => {
                return dispatch(getLike(getL.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinLikeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`likes/${id}`, "get", id, {})
            .then((getSinL) => {
                return dispatch(getSinLike(getSinL.data.data));
            })
            .catch((error) => {});
    };
};

export const updateLikeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`likes/${id}`, "put", id, {})
            .then((upLike) => {
                return dispatch(updateLike(upLike.data.data));
            })
            .catch((error) => {});
    };
};

export const deleteLikeAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`likes/${id}`, "delete", id, {})
            .then((delLike) => {
                return dispatch(deleteLike(delLike.data.data));
            })
            .catch((error) => {});
    };
};
