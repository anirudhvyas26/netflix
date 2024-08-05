import axios from "axios";
import { loginFailure, loginStart, loginSuccess, registerStart, registerFailureUserExists, registerSuccess } from "./AuthActions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await axios.post(`${process.env.BACKEND_URL}/api/auth/login`, user);
    console.log(process.env.BACKEND_URL,"process.env.BACKEND_URL");

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());

  try {
    const res = await axios.post(`${process.env.BACKEND_URL}/api/auth/register`, user);

    dispatch(registerSuccess(res.data));
  } catch (err) {

    if (err.response?.data.code == 11000) {
      // dispatch(
      //   registerFailureUserExists(err.response.data.keyValue.email)
      // );

    }
  }
};