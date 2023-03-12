import React from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

// import mime from "mime-types";

const FileModal = () => {
  return (
    // <Modal basic open={modal} onClose={closeModal}>
    <Modal basic>
      <Modal.Header>Select an Image File</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          label="File"
          name="file"
          type="file"
          //   onChange={this.addFile}
        />
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color="green" inverted onClick={this.sendFile}>
          <Icon name={"checkmark"} /> Send
        </Button>
        <Button color="red" inverted onClick={closeModal}>
          <Icon name={"remove"} /> Cancel
        </Button> */}
      </Modal.Actions>
    </Modal>
  );
};

export default FileModal;
