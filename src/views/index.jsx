import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import NavigationActions from "../store/navigation/actions";
// import { Layout } from "antd";

// const { Header, Footer, Sider, Content } = Layout;

const { fetching, success, error, check } = NavigationActions;

const Index = (props) => {
  useEffect(() => {
    check(props);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* <Layout>
        <Sider style={{ backgroundColor: "grey" }}>Sample Sider</Sider>
        <Layout style={{ backgroundColor: "lightblue", height: 670 }}>
          <Header style={{ backgroundColor: "green", height: 60 }}>
            Sample Header
          </Header>
          <Content style={{ backgroundColor: "yellow" }}>
            Sample Content
          </Content>
          <Footer style={{ backgroundColor: "green" }}>Sample Footer</Footer>
        </Layout>
        <Sider style={{ backgroundColor: "grey" }}>Sample Sider</Sider>
      </Layout> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.Auth?.accessToken,
    isFetching: state.navigation?.isFetching,
    isLogin: state.Auth?.isLogin,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { fetching, success, error, check })
)(Index);
