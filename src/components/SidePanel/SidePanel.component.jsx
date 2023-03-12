import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel.component";
import Starred from "./Starred.component";
import Channels from "./Channels.component";
import DirectMessages from "./DirectMessages.component";

const SidePanel = () => {
  return (
    <Menu
      size="large"
      inverted
      fixed="left"
      vertical
      style={{ backgroundColor: "hwb(300deg 24% 70%)", fontSize: "1.2rem" }}
    >
      <UserPanel />
      <Starred />
      <Channels />
      <DirectMessages />
    </Menu>
  );
};

export default SidePanel;
