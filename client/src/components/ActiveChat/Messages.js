import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { CloudinaryContext, Image } from 'cloudinary-react'
import { cloudinaryCloudName } from "./utils/Constants";
const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {
        messages.map((message) => {
          const time = moment(message.createdAt).format("h:mm");

          return message.senderId === userId ? (
            <>
              <SenderBubble key={message.id} text={message.text} time={time} />
              <CloudinaryContext cloudName={cloudinaryCloudName}>
                <div>
                  <Image publicId="lxs2grfhe6bi2d0cm7z0" width="50" />
                </div>
              </CloudinaryContext>
            </>
          ) : (
            <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
          );
        })}
    </Box>
  );
};

export default Messages;
