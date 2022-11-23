import { makeRequest } from "../api";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    addVendor: "addVendor",
    getVendor: "getVendor",
    getSinVendor: "getSinVendor",
    // getVendorProfilePic: 'getVendorProfilePic',
    deleteVendor: "deleteVendor",

};

export const addVendor = (data) => {
    return {
        type: actions.addVendor,
        payload: { vendorL: data },
    };
};

export const getVendor = (vendors) => {
    return {
        type: actions.getVendor,
        payload: { vendorL: vendors },
    };
};

export const getSinVendor = (sinVendor) => {
    return {
        type: actions.getSinVendor,
        payload: { vendorSinL: sinVendor },
    };
};

// export const getVendorProfilePic = (data) => {
//     return {
//         type: actions.getVendorProfilePic,
//         payload: {vendorL: data},
//     };
// };

export const deleteVendor = (vendorVendor) =>{
    return {
        type: actions.deleteVendor,
        payload: {vendorC: vendorVendor},
    }
}

export const addVendorAsync = (data) => {
    return (dispatch) => {
        return makeRequest("vendors/", "post", data, {})
            .then((upVendor) => {
                return dispatch(addVendor(upVendor.data.data));
                // if(response.data.status.toString()=== '200'){
                //     console.log("Success creating Vendor");

                // }
                // else{
                //     console.log("Failed to create Vendor");
                // }
            })
            .catch((error) => {});
    };
};


export const getVendorsAsync = () => {
    return (dispatch) => {
        return makeRequest("vendors/", "get", {}, {})
            .then((getU) => {
                console.log("getVendor async", getU.data.data)
                return dispatch(getVendor(getU.data.data));
            })
            .catch((error) => {});
    };
};


export const getSinVendorAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`vendors/${id}`, "get", id, {})
            .then((getSinL) => {
                return dispatch(getSinVendor(getSinL.data.data));
            })
            .catch((error) => {});
    };
};

// export const getVendorProfilePicAsync = () => {
//     return (dispatch) => {
//         return makeRequest('vendors/profile_pic/remove', "patch", {})
//             .then((pVendor) => {
//                 return dispatch(getVendorProfilePic(pVendor.data.data));
//             })
//             .catch((error) => {});
//     };
// };

export const deleteVendorAsync = (id) => {
    return (dispatch) => {
        return makeRequest(`vendors/${id}`, "delete", id, {})
            .then((delVendor) => {
                return dispatch(getVendorsAsync());
            })
            .catch((error) => {});
    };
};
