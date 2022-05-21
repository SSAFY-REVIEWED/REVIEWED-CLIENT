import { axiosInstance } from "./index";
import VueCookies from "vue-cookies";

const REFRESH_URL = "/token/refresh/";

const getNewAccessToken = async () => {
  try {
    const response = await axiosInstance.post(REFRESH_URL);
    VueCookies.set("accessToken", response.data.data.access, "2h");
    return response;
  } catch (err) {
    return err;
  }
};

export default getNewAccessToken;
