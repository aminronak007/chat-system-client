import React from "react";
import { Segment, Button, Input } from "semantic-ui-react";
// import firebase from "../../firebase";
// import uuidv4 from "uuid/dist/v4";
import { Picker } from "emoji-mart";
// import "emoji-mart/css/emoji-mart.css";

import FileModal from "./FileModal.component";
import Progressbar from "./Progressbar.component";

const MessageForm = () => {
  return (
    <Segment className="messageform">
      {/* {emojiPicker && ( */}
      <Picker
        set="apple"
        className="emojipicker"
        title="Pick your Emoji"
        emoji="point_up"
        //   onSelect={this.handleAddEmoji}
      />
      {/* )} */}
      <Input
        fluid
        name="message"
        style={{ marginBottom: "0.7em" }}
        // value={message}
        label={
          <Button
          // icon={emojiPicker ? "close" : "add"}
          // onClick={this.handleTogglePicker}
          // content={emojiPicker ? "Close" : null}
          />
        }
        labelPosition="left"
        placeholder="Write your Message"
        // onKeyDown={this.handleKeyDown}
        // ref={(node) => (this.messageInputRef = node)}
        // onChange={this.handleChange}
        // className={
        //   errors.some((err) => err["message"].includes("message"))
        //     ? "error"
        //     : ""
        // }
      />
      <Button.Group icon widths="2">
        <Button
          color="orange"
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          //   disabled={loading}
          //   onClick={this.sendMessage}
        />
        <Button
          color="teal"
          content="Upload Media"
          labelPosition="right"
          icon="cloud upload"
          //   disabled={uploadState == "uploading"}
          //   onClick={this.openModal}
        />
      </Button.Group>
      <FileModal
      // modal={modal}
      // closeModal={this.closeModal}
      // uploadFile={this.uploadFile}
      />
      <Progressbar
      // uploadState={uploadState}
      // percentUploaded={percentUploaded}
      />
    </Segment>
  );
};

export default MessageForm;
