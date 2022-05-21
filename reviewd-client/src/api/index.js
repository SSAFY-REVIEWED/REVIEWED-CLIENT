import axios from "axios";
import getNewAccessToken from "./refresh.js";

const axiosInstance = axios.create({
  baseUrl: "http://localhost:8000/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const URL = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  USERINFO: "/user-info/",
};

export const postMethod = async (body, url) => {
  const res = await axiosInstance.post(URL[url], body);
  return res;
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log("에러일 경우", error.config);
    const errorAPI = error.config;
    if (error.response.data.status === 401 && errorAPI.retry === undefined) {
      errorAPI.retry = true;
      console.log("토큰이 이상한 오류일 경우");
      await getNewAccessToken();
      return await axios(errorAPI);
    }
    return Promise.reject(error);
  }
);
