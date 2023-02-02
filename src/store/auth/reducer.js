import authAction from "./actions";
import Cookies from "js-cookie";

const initState = {
  isLogin: Cookies.get("isLogin") ? Cookies.get("isLogin") === "true" : false,
  accessToken: Cookies.get("accessToken")
    ? Cookies.get("accessToken")
    : document.cookie.split("=").pop(),
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case authAction.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        accessToken: action.accessToken,
      };
    default:
      return state;
  }
}
