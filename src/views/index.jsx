import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import NavigationActions from "../store/navigation/actions";
import { Grid } from "semantic-ui-react";
import SidePanel from "../components/SidePanel/SidePanel.component";
import Messages from "../components/Messages/Messages.component";
import MetaPanel from "../components/MetaPanel/MetaPanel.component";
import { CheckUser } from "../api/auth";

// import { Layout } from "antd";

// const { Header, Footer, Sider, Content } = Layout;

const { fetching, success, error, check } = NavigationActions;

const Index = (props) => {
  const { token, check } = props;

  const checkUser = async () => {
    await CheckUser(token).then((res) => {
      if (res.success) {
        check(res.data);
        fetching(false);
      } else {
        fetching(false);
      }
    });
  };
  useEffect(() => {
    checkUser(token);
    // eslint-disable-next-line
  }, []);

  return (
    <Grid
      columns="equal"
      className="app"
      // style={{ background: secondaryColor }}
    >
      {/* <ColorPanel currentUser={currentUser} key={ currentUser && currentUser.name }/> */}
      <SidePanel
      // currentUser={currentUser}
      // key={currentUser && currentUser.uid}
      // primaryColor={primaryColor}
      />

      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages
        // currentChannel={currentChannel}
        // key={currentChannel && currentChannel.id}
        // currentUser={currentUser}
        // isPrivateChannel={isPrivateChannel}
        />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel
        // key={currentChannel && currentChannel.name}
        // userPosts={userPosts}
        // isPrivateChannel={isPrivateChannel}
        // currentChannel={currentChannel}
        />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.Auth?.accessToken,
    isFetching: state.navigation?.isFetching,
    isLogin: state.Auth?.isLogin,
    user: state.navigation.user,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { fetching, success, error, check })
)(Index);
