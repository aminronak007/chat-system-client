import React from "react";
import {
  Grid,
  Header,
  Icon,
  Dropdown,
  Image,
  Modal,
  Input,
  Button,
} from "semantic-ui-react";
import AvatarEditor from "react-avatar-editor";

const UserPanel = () => {
  return (
    // <Grid style={{ background: this.props.primaryColor }}>
    <Grid>
      <Grid.Column>
        <Grid.Row style={{ padding: "1.2em", margin: "0" }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>Chat Portal</Header.Content>
          </Header>
        </Grid.Row>

        {/* <Grid.Row> */}
        <Header style={{ padding: "1.25em" }} as="h4" inverted>
          <Dropdown
            trigger={
              <span>
                {/* <Image src={user.photoURL} spaced="right" avatar /> */}
                {/* {user.displayName} */}
              </span>
            }
            // options={this.dropdownOptions()}
          />
        </Header>
        {/* </Grid.Row> */}

        {/* <Modal basic open={modal} onClose={this.closeModal}> */}
        <Modal basic>
          <Modal.Header>Change Avatar</Modal.Header>
          <Modal.Content>
            <Input
              //   onChange={this.handleChange}
              fluid
              type="file"
              label="New Avatar"
              name="previewImage"
            />
            <Grid centered stackable columns={2}>
              <Grid.Row centered>
                <Grid.Column className="ui center aligned grid">
                  {/* {previewImage && (
                    <AvatarEditor
                      ref={(node) => (this.avatarEditor = node)}
                      image={previewImage}
                      width={280}
                      height={280}
                      border={50}
                      scale={1.2}
                    />
                  )} */}
                </Grid.Column>
                <Grid.Column>
                  {/* {croppedImage && (
                    <Image
                      src={croppedImage}
                      style={{ margin: "3.5em auto" }}
                      width={230}
                      height={230}
                    />
                  )} */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            {/* {croppedImage && (
              <Button color="green" inverted onClick={this.uploadCroppedImage}>
                <Icon name="save" /> Change Avatar
              </Button>
            )} */}
            {/* <Button color="green" inverted onClick={this.handleCropImage}>
              <Icon name="image" /> Preview
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button> */}
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
