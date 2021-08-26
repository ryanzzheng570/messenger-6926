import React, { useRef, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

import { makeStyles } from "@material-ui/styles";
import ImageContainer from "./ImageContainer";

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
  },
  image_container: {
    '& img': {
      width: 150,
    },
    '& div:only-child': {
      '& img': {
        width: 200
      }
    }
  },
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
            <Box key={message.id}>
              <SenderBubble text={message.text} time={time} />
              <Grid className={classes.image_container} container justifyContent='flex-end'>
                <ImageContainer message={message} />
              </Grid>
            </Box>
          ) : (
            <Box key={message.id}>
              <OtherUserBubble text={message.text} time={time} otherUser={otherUser} />
              <Grid className={classes.image_container} container justifyContent='flex-start'>
                <ImageContainer message={message} />
              </Grid>
            </Box>
          );
        })}
      <Box ref={messageEndRef} />
    </Box>
  );
};

export default Messages;
