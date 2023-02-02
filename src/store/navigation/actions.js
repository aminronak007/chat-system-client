import { toast } from "react-toastify";

const navigationAction = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  CLOSE: "CLOSE",
  FETCHING: "FETCHING",
  CHECK: "CHECK",

  success: (messages) => {
    messages !== "" &&
      toast.success(messages, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    return {
      type: navigationAction.SUCCESS,
      resType: "success",
      message: messages,
      show: true,
      isFetching: false,
    };
  },
  error: (messages) => {
    messages !== "" &&
      toast.error(messages, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    return {
      type: navigationAction.ERROR,
      resType: "error",
      message: messages,
      show: true,
      isFetching: false,
    };
  },
  fetching: () => ({
    type: navigationAction.FETCHING,
    isFetching: true,
  }),

  check: (data) => ({
    type: navigationAction.CHECK,
    isFetching: data?.isFetching,
    isLogin: data?.isLogin,
    token: data?.token,
  }),
};

export default navigationAction;
