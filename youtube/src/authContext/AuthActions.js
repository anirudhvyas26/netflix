export const loginStart = () => ({
    type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});
export const loginFailure = (user) => ({
    type: "LOGIN_FAILURE",
});
export const logout = () => ({
    type: "LOGOUT",
});

export const registerStart = (user) => ({
    type: "REGISTER_START",
});

export const registerFailureUserExists = (user) => ({
    type: "REGISTER_FAILURE_USER_EXISTS",
    payload: user,
});

export const registerSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user
});