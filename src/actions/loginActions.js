import { makeRequest } from "../api";
import Constants from "../utils/Constants";
import jwt_decode from "jwt-decode";

//EXPORT ACTIONS

export const actions = {
    Login: "Login",
    Logout: "Logout",
    Reset: "Reset",
    Register: "Register",
    VerifyPhone: "VerifyPhone",
    VerifyEmail: "VerifyEmail",
    ForgottenPwd: "ForgottenPwd",
};

// DISPATCH METHODS

export const login = (user) => {
    return {
        type: actions.Login,
        payload: user,
    };
};

// export const logout = (user) => {
//     return {
//         type: actions.Logout,
//         payload: user,
//     };
// };

export const reset = (usermail) => {
    return {
        type: actions.Reset,
        payload: usermail,
    };
};
export const forgotten = (userf) => {
    return {
        type: actions.ForgottenPwd,
        payload: userf,
    };
};

export const register = (data) => {
    return {
        type: actions.Register,
        payload: data,
    };
};

export const verifyEmail = (emailV) => {
    return {
        type: actions.VerifyEmail,
        payload: emailV,
    };
};

export const verifyPhone = (phoneV) => {
    return {
        type: actions.VerifyEmail,
        payload: phoneV,
    };
};

export const logout = () => {
    return {
        type: actions.Logout,
        // payload: phoneV,
    };
};

export const jwtValidator = (jwt) => {
    console.log("Checking jwt", jwt);
    try {
        var decoded = jwt_decode(jwt);
        console.log("something here", decoded);
        if (!decoded || decoded.exp < new Date().getMilliseconds()) {
            return false;
        }
        return true;
    } catch (e) {
        console.log("catech", e)
    }
    return false;
};

//LOGIN ASYNC METHODS

export const loginAsync = (username, password) => {
    // console.log("Retrieveing user", username);
    return (dispatch) => {
        console.log("Making request");
        {
        }
        return makeRequest("auth/login", "post", { username, password })
            .then((user) => {
                // console.log("user", user);
                // console.log("keys", Object.keys(user));
                // console.log("User retrieved successfuly", user.data.data);
                console.log("Customer info", user.data.data.phone);
                const status = user.data.status;
                // if (status == 204) {
                //     dispatch(login({ error: user.data.message }));
                //     console.log("error =", user.data.message);
                // } else {
                dispatch(login(user.data.data));
                console.log("success", user.data.data);
                // }
            })
            .catch((exception) => {
                // dispatch(
                //     login({ name: "Customer", type: Constants.customer })
                // );
                //     if(user.data.data.role === Constants.admin){
                //         dispatch(login({name: "Administrator", type: Constants.admin}))
                //     }
                //     else if (user.data.data.role === Constants.vendor){
                //         dispatch(login({name: "Vendor", type: Constants.vendor}))
                //     }
                //     else {
                //         dispatch(login({name: 'Customer', type: Constants.customer}))
                //     }
                //     console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

// export const logout = () => {
//     return (dispatch) => {
//         return makeRequest("auth/logout", "get", )
//             .then((user1) => {
//                 dispatch(logout({ error: user1.data.message }));
//                 // console.log("error =", user1.data.message);
//             })
//             .catch((exception) => {
//                 console.log("Some unknown error occured: ", exception);
//             })
//             .then(() => {
//                 //optional action
//             });
//     };
// };

export const resetAsync = (email) => {
    console.log("Retrieveing user", email);
    return (dispatch) => {
        return makeRequest("auth/reset-password", "post", { email })
            .then((res) => {
                dispatch(reset({ error: res.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};
export const forgottenPwdAsync = (email) => {
    console.log("Retrieveing user", email);
    return (dispatch) => {
        return makeRequest("auth/forgot-password", "post", { email })
            .then((frg) => {
                dispatch(forgotten({ error: frg.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

export const registerAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/register", "post", { data })
            .then((register) => {
                dispatch(register({ error: register.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

export const verifyEmailAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/verify-email", "post", { data })
            .then((Vem) => {
                dispatch(verifyEmail({ error: Vem.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};

export const verifyPhoneAsync = (data) => {
    return (dispatch) => {
        return makeRequest("auth/verify-phone", "post", { data })
            .then((Vph) => {
                dispatch(verifyPhone({ error: Vph.data.data }));
                // console.log("error =", res.data.message);
            })
            .catch((exception) => {
                console.log("Some unknown error occured: ", exception);
            })
            .then(() => {
                //optional action
            });
    };
};
