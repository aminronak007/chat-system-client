import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import enhancer from "./enhancers/LoginEnhancer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import ErrorMsg from "../../../components/Error/ErrorMsg";
import { UserOutlined } from "@ant-design/icons";
import { login } from "../../../api/auth";
import AuthActions from "../../../store/auth/actions";
import NavigationActions from "../../../store/navigation/actions";
import { ToastContainer } from "react-toastify";

const { Item } = Form;
const { loginData } = AuthActions;
const { fetching, success, error } = NavigationActions;

const Login = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    history,
    touched,
    submitCount,
    fetching,
    success,
    error,
    token,
    loginData,
  } = props;

  const Error = (props) => {
    const field = props.field;
    if ((errors[field] && touched[field]) || submitCount > 0) {
      return <ErrorMsg message={errors[field]} />;
    } else {
      return <span />;
    }
  };

  const onLogin = () => {
    let { values, isValid, handleSubmit } = props;
    handleSubmit();
    if (isValid) {
      fetching(true);
      login(values).then(async (res) => {
        if (res.success) {
          fetching(false);
          loginData(res.data);
          success(res.message);
          history.push("/index");
        } else {
          fetching(false);
          error(res.message);
        }
      });
    }
  };

  useEffect(() => {
    // if (token) {
    //   history.push("/index");
    // }
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://cdn.dribbble.com/users/20368/screenshots/3949907/live_chat_anim_2.gif"
            alt="Login"
          />
        </div>
        <Form name="login-form">
          <p className="form-title">Welcome back</p>
          <p>Login to the chat portal.</p>
          <Item>
            <Input
              placeholder="Username or Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              size="large"
              prefix={<UserOutlined />}
            />
            <Error field="email" />
          </Item>

          <Item>
            <Input.Password
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Error field="password" />
          </Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={onLogin}
            >
              LOGIN
            </Button>
          </Item>
        </Form>
      </div>

      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.Auth?.accessToken,
    isFetching: state.navigation?.isFetching,
  };
};

export default compose(
  withRouter,
  enhancer,
  connect(mapStateToProps, { loginData, fetching, success, error })
)(Login);
