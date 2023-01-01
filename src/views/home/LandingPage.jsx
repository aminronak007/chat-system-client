import React from "react";
import { Layout, Menu, theme } from "antd";
import Logo from "../../assets/images/logo/unitelogo.png";
import moment from "moment";
import { Link } from "react-router-dom";

const { Item } = Menu;

const { Header, Content, Footer } = Layout;
const LandingPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let menuItems = [
    {
      key: 1,
      label: "Home",
      path: "/",
    },
    {
      key: 2,
      label: "Login",
      path: "/login",
    },
    {
      key: 3,
      label: "Pricing",
      path: "/pricing",
    },
    {
      key: 4,
      label: "About Us",
      path: "/about",
    },
    {
      key: 5,
      label: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            width: 145,
            height: 45,
            margin: "9px 24px 16px 0",
            padding: "3px 16px 16px 20px",
            background: "white",
          }}
        >
          <img src={Logo} alt="logo" width={100} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {menuItems.length > 0
            ? menuItems.map((i) => {
                return (
                  <Item key={i.key}>
                    <Link to={i?.path}>{i.label}</Link>
                  </Item>
                );
              })
            : null}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", margin: "16px 0", textAlign: "center" }}
      >
        <div
          style={{ padding: 24, minHeight: 550, background: colorBgContainer }}
        >
          <h1> Welcome to Unite Software Solutions</h1>
          <p>
            This is an internal communication platform for Unite Software
            Solutions employees.
          </p>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Chat System ©{moment().year()} Created & Developed by{" "}
        <a href="https://ronak-amin-cv.netlify.app/">Ronak Amin</a>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
