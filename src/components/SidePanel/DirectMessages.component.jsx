import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const DirectMessages = () => {
  return (
    <Menu.Menu className="menu">
      <Menu.Item>
        <span>
          <Icon name="mail" /> DIRECT MESSAGES
        </span>{" "}
        {/* ({users.length}) */}
      </Menu.Item>
      {/* {users.map((user) => ( */}
      <Menu.Item
        //   key={user.uid}
        //   onClick={() => this.changeChannel(user)}
        style={{ opacity: 0.7, fontStyle: "italic" }}
        //   active={user.uid === activeChannel}
      >
        <Icon
          name="circle"
          size="small"
          // color={this.isUserOnline(user) ? "green" : "red"}
        />
        {/* @ {user.name} */}
      </Menu.Item>
      {/* ))} */}
    </Menu.Menu>
  );
};

// export default connect(null, { setCurrentChannel, setPrivateChannel })(DirectMessages);
export default DirectMessages;
