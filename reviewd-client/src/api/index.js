import axios from "axios";
import getNewAccessToken from "./refresh.js";
import VueCookies from "vue-cookies";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

axios.interceptors.request.use(
  (config) => {
    const token = VueCookies.get("accessToken");
    //TODO: 삭제하기
    // console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ACCOUNTS_URL = {
  LOGIN: "/login/",
  SIGNUP: "/signup/",
  USER_INFO: "/user-info/",
  EMAIL_CHECK: "/email/",
  SURVEY: "/survey/",
  GOOGLE_LOGIN: "/google/callback/",
  GET_ACCESS: "/access-token/",
};

export const getData = async (url, query) => {
  if (!query) {
    const res = await axios.get(ACCOUNTS_URL[url]);
    return res;
  }
  const res = await axios.get(`${ACCOUNTS_URL[url]}?page=${query}`);
  return res;
};

export const postData = async (url, body) => {
  const res = await axios.post(ACCOUNTS_URL[url], body);
  return res;
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const errorAPI = error.config;
    if (error.response.data.status === 401 && errorAPI.retry === undefined) {
      errorAPI.retry = true;
      //TODO: 삭제하기
      console.log("토큰이 이상한 오류일 경우");
      await getNewAccessToken();
      return await axios(errorAPI);
    }
    return Promise.reject(error);
  }
);
