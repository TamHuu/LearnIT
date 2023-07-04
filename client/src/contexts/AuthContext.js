import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { LOCAL_STORAGE_TOKEN_NAME, apiUrl } from "./constant";
import React, { useReducer, createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Login
  const loginUser = async (useForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, useForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  // Context data
  const authContextData = { loginUser, authState };
  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
