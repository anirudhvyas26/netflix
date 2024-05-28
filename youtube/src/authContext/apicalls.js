import axios from "axios";
import { loginFailure, loginStart, loginSuccess, registerStart, registerFailureUserExists } from "./AuthActions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());

  try {
    await axios.post("http://localhost:8800/api/auth/register", user);
  } catch (err) {

    if (err.response?.data.code == 11000) {
      dispatch(
        registerFailureUserExists({ user: err.response.data.keyValue.email })
      );

    }
  }
};