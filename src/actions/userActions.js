import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    updateUser: "updateUser",
    getUser: "getUser",
    getSinUser: "getSinUser",
    getUserProfilePic: 'getUserProfilePic',
    deleteUser: "deleteUser",

};

export const updateUser = (data) => {
    return {
        type: actions.updateUser,
        payload: { userL: data },
    };
};

export const getUser = (users) => {
    return {
        type: actions.getUser,
        payload: { userL: users },
    };
};

export const getSinUser = (sinUser) => {
    return {
        type: actions.getSinUser,
        payload: { userSinL: sinUser },
    };
};

export const getUserProfilePic = (data) => {
    return {
        type: actions.getUserProfilePic,
        payload: {userL: data},
    };
};

export const deleteUser = (userUser) =>{
    return {
        type: actions.deleteUser,
        payload: {userC: userUser},
    }
}

export const updateUserAsync = (data) => {
    return (dispatch) => {
        return makeRequest("users/update", "post", data, {})
            .then((upUser) => {
                return dispatch(updateUser(upUser.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating User");

                // }
                // else{
                //     console.log("Failed to create User");
                // }
            })
            .catch((error) => {});
    };
};


export const getUserAsync = (data) => {
    return (dispatch) => {
        return makeRequest("users", "get", data, {})
            .then((getL) => {
                return dispatch(getUser(getL.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinUserAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`users/${id}`, "get", id, {})
            .then((getSinL) => {
                return dispatch(getSinUser(getSinL.data.data));
            })
            .catch((error) => {});
    };
};

export const getUserProfilePicAsync = () => {
    return (dispatch) => {
        return makeRequest('users/profile_pic/remove', "patch", {})
            .then((pUser) => {
                return dispatch(getUserProfilePic(pUser.data.data));
            })
            .catch((error) => {});
    };
};

export const deleteUserAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`users/${id}`, "delete", id, {})
            .then((delUser) => {
                return dispatch(deleteUser(delUser.data.data));
            })
            .catch((error) => {});
    };
};
