import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "http://localhost:8000/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authToken"));

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const LOGIN_URL = "/login/";
const SIGNUP_URL = "/signup/";

export const login = async (body) => {
  const res = await axiosInstance.post(LOGIN_URL, body);
  return res;
};

export const signup = async (body) => {
  const res = await axiosInstance.post(SIGNUP_URL, body);
  return res;
};
