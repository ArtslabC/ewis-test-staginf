import React, { useEffect, useReducer } from "react";
import {
  LOGIN_CALL,
  LOGOUT_CALL,
  REGISTER_CALL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_FAILURE,
  LOAD_USER,
  LOAD_USER_FAIL,
} from "./AuthActions";
import AuthReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const AuthState = (props) => {
  const navigate = useNavigate();

  const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const API = axios.create({
    baseURL: `${SERVER_URL}/`,
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

  API.interceptors.request.use((req) => {
    if (
      localStorage.getItem("ewis_sl_user") &&
      localStorage.getItem("ewis_sl_user") != null
    ) {
      req.headers.authorization = `Bearer ${localStorage.getItem(
        "ewis_sl_user"
      )}`;
    }
    console.log(req.headers);
    return req;
  });

  const login = async (credentials) => {
    dispatch({
      type: LOGIN_CALL,
      payload: res.data,
    });
    try {
      API.post(`${SERVER_URL}/api/auth/login`, {
        body: JSON.stringify(credentials),
      })
        .then((res) => {
          localStorage.setItem("ewis_sl_user", res.data.token);
          dispatch({
            type: LOAD_USER,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAILURE,
          });
        });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };

  const checkUser = async () => {
    try {
      dispatch({
        type: LOGIN_CALL,
      });
      console.log("Auth State ");
      API.get("api/user/logged-user")
        .then((res) => {
          dispatch({
            type: LOAD_USER,
            payload: res.data,
          });
          console.log(res.data);
        })
        .catch((err) => {
          dispatch({
            type: LOAD_USER_FAIL,
          });
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        checkUser,
        login,
        loading: state.loading,
        error: state.error,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
