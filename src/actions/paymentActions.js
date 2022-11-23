import { makePayStackRequest } from "../api2";
import Constants from "../utils/Constants";

//EXPORT ACTIONS

export const actions = {
    getPayment: "getPayment",
   
};



export const getPayment = (payments) => {
    return {
        type: actions.getPayment,
        payload: { userPay: payments },
    };
};



// ASYNC CALL




export const getPaymentAsync = () => {
    return (dispatch) => {
        return makePayStackRequest("transaction", "get", {}, {})
            .then((getP) => {
                return dispatch(getPayment(getP.data.data));
            })
            .catch((error) => {});
    };
};
