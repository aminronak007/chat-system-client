import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

const MessagesHeader = () => {
  return (
    <Segment clearing>
      <Header fluid="true" as="h2" floated="left" styled={{ marginBottom: 0 }}>
        <span>
          {/* {channelName}
          {!isPrivateChannel && (
            <Icon
              name={isChannelStarred ? "star" : "star outline"}
              size="small"
              color={isChannelStarred ? "yellow" : ""}
              onClick={handleStar}
            />
          )} */}
        </span>
        {/* <Header.Subheader>{numUniqueUsers}</Header.Subheader> */}
      </Header>

      <Header floated="right">
        <Input
          size="mini"
          icon="search"
          name="searchTerm"
          placeholder="Search Messages..."
          //   onChange={handleSearchChange}
          //   loading={searchLoading}
        />
      </Header>
    </Segment>
  );
};

export default MessagesHeader;
