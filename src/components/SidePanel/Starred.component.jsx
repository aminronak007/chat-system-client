import React from "react";
import { Menu, Icon } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { setCurrentChannel, setPrivateChannel } from "../../actions/actions";

const Starred = () => {
  //   const { starredChannels } = this.state;
  return (
    <Menu.Menu className="menu">
      <Menu.Item>
        <span>
          <Icon name="star" />
          STARRED
        </span>{" "}
        {/* ({starredChannels.length}) */}
      </Menu.Item>
      {/* {this.displayChannels(starredChannels)} */}
    </Menu.Menu>
  );
};

// export default connect(null, { setCurrentChannel, setPrivateChannel })(Starred);
export default Starred;
