import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { CloudinaryContext, Image } from 'cloudinary-react'
import { cloudinaryCloudName } from "./utils/Constants";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 700,
    overflowY: 'scroll',
    overscrollBehaviorY: 'contain',
    scrollSnapType: 'y',
    '&:last-child': {
      scrollSnapAlign: 'end',
    },
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent'
    }
  }

}));

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const classes = useStyles();

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  return (
    <Box className={classes.root}>
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
      <Box ref={messageEndRef} />
    </Box>
  );
};

export default Messages;
