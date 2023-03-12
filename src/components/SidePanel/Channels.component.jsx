import React from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";

const Channels = () => {
  //   const { channels, modal } = this.state;
  return (
    <React.Fragment>
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="exchange" />
            CHANNELS
          </span>{" "}
          {/* ({channels.length}) <Icon name="add" onClick={this.openModal} /> */}
        </Menu.Item>
        {/* {this.displayChannels(channels)} */}
      </Menu.Menu>
      {/* <Modal basic open={modal} onClose={this.closeModal}> */}
      <Modal basic>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          {/* <Form onSubmit={this.handleSubmit}> */}
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="ChannelName"
                // onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Channel Details"
                name="ChannelDetails"
                // onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color="green" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark" />
            Add
          </Button> */}
          {/* <Button color="red" inverted onClick={this.closeModal}>
            <Icon name="remove" />
            Cancel
          </Button> */}
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

// export default connect(null, { setCurrentChannel, setPrivateChannel })(
//   Channels
// );

export default Channels;
