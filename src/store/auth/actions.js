const authActions = {
  LOGIN: "LOGIN",

  loginData: (token) => {
    return {
      type: authActions.LOGIN,
      isLogin: true,
      accessToken: token,
    };
  },
};

export default authActions;
