import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import { connect } from "react-redux";
// import { setUserPosts } from "../../actions/actions";
import MessagesHeader from "./MessagesHeader.component";
import MessageForm from "./MessageForm.component";
import Message from "./Message.component";
import { Typing } from "./Typing";
import { Skeleton } from "./Skeleton.component";

const Messages = () => {
  return (
    <React.Fragment>
      <div className="messages__container">
        <MessagesHeader
          className="messages__header"
          //   channelName={this.displayChannelName(channel)}
          //   numUniqueUsers={numUniqueUsers}
          //   handleSearchChange={this.handleSearchChange}
          //   searchLoading={searchLoading}
          //   isPrivateChannel={isPrivateChannel}
          //   handleStar={this.handleStar}
          //   isChannelStarred={isChannelStarred}
        />
        <Segment>
          {/* <Comment.Group
            className={progressBar ? "messages__progress" : "messages"}
          >
            {this.displayMessagesSkeleton(messagesLoading)}

            {searchTerm
              ? this.displayMessages(searchResults)
              : this.displayMessages(messages)}
            {this.displayTypingUsers(typingUsers)}
            <div ref={(node) => (this.messagesEnd = node)}></div>
          </Comment.Group> */}
        </Segment>

        {/* <MessageForm
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
          className="messages__form"
          isProgressBarVisible={this.isProgressBarVisible}
          isPrivateChannel={isPrivateChannel}
          getMessagesRef={this.getMessagesRef}
        /> */}
      </div>
    </React.Fragment>
  );
};

// export default connect(null, { setUserPosts })(Messages);
export default Messages;
