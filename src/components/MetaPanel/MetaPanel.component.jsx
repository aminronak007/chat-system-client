import React from "react";
import {
  Segment,
  Accordion,
  Header,
  Icon,
  Image,
  List,
} from "semantic-ui-react";

const MetaPanel = () => {
  return (
    <Segment>
      <Header as="h3" attached="top">
        About #
      </Header>
      <Accordion styled attached="true">
        <Accordion.Title
          //   active={activeIndex === 0}

          index={0}
          //   onClick={this.setActiveIndex}
        >
          <Icon name="dropdown" />
          <Icon name="info" />
          Channel Details
        </Accordion.Title>
        <Accordion.Content
        // active={0}
        >
          {/* {channel && channel.details} */}
        </Accordion.Content>

        <Accordion.Title index={1}>
          <Icon name="dropdown" />
          <Icon name="user circle" />
          Top Posters
        </Accordion.Title>
        <Accordion.Content>
          <List>trhr</List>
        </Accordion.Content>

        <Accordion.Title
          //   active={activeIndex === 2}
          index={2}
          //   onClick={this.setActiveIndex}
        >
          <Icon name="dropdown" />
          <Icon name="pencil alternate" />
          Created By
        </Accordion.Title>
        <Accordion.Content>
          <Header as="h3">
            <Image circular />
          </Header>
        </Accordion.Content>
      </Accordion>
    </Segment>
  );
};

export default MetaPanel;
