import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const sortedMessages = React.useMemo(() => 
   messages.sort((t1, t2) => new moment(t1.createdAt) - new moment(t2.createdAt)),
   [messages]
   );

  return (
    <Box>
      {
        sortedMessages.map((message) => {
          const time = moment(message.createdAt).format("h:mm");

          return message.senderId === userId ? (
            <SenderBubble key={message.id} text={message.text} time={time} />
          ) : (
            <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
          );
        })}
    </Box>
  );
};

export default Messages;
