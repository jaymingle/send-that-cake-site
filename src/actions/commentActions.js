import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    postComment: "postComment",
    getComment: "getComment",
    updateComment: "updateComment",
    deleteComment: "deleteComment",
    getSinComment: "getSinComment",
};

export const postComment = (data) => {
    return {
        type: actions.postComment,
        payload: { userC: data },
    };
};

export const getComment = (comments) => {
    return {
        type: actions.getComment,
        payload: { userC: comments },
    };
};

export const getSinComment = (sincomment) => {
    return {
        type: actions.getSinComment,
        payload: { userSinC: sincomment },
    };
};

export const updateComment = (data) => {
    return {
        type: actions.updateComment,
        payload: {userC: data},
    };
};

export const deleteComment = (userComment) =>{
    return {
        type: actions.postComment,
        payload: {userC: userComment},
    }
}

export const postCommentAsync = (data) => {
    return (dispatch) => {
        return makeRequest("comments", "post", data, {})
            .then((postC) => {
                return dispatch(postComment(postC.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating comment");

                // }
                // else{
                //     console.log("Failed to create comment");
                // }
            })
            .catch((error) => {});
    };
};


export const getCommentAsync = (data) => {
    return (dispatch) => {
        return makeRequest("comments", "get", data, {})
            .then((getC) => {
                return dispatch(getComment(getC.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinCommentAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`comments/${id}`, "get", id, {})
            .then((getSinC) => {
                return dispatch(getSinComment(getSinC.data.data));
            })
            .catch((error) => {});
    };
};

export const updateCommentAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`comments/${id}`, "put", id, {})
            .then((upComment) => {
                return dispatch(updateComment(upComment.data.data));
            })
            .catch((error) => {});
    };
};

export const deleteCommentAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`comments/${id}`, "delete", id, {})
            .then((delComment) => {
                return dispatch(deleteComment(delComment.data.data));
            })
            .catch((error) => {});
    };
};
