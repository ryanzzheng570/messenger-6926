import React, { useRef, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'
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
  },
  image_container: {
    display: "flex",

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
            <Box key={message.id}>
              <SenderBubble key={message.id} text={message.text} time={time} />
              <Grid container justifyContent='flex-end'>
                {/* {messages.attachments && messages.attachments.map((attachments) => { */}
                {/* <Box m={0}>
                  <CloudinaryContext key={message.id} cloudName={cloudinaryCloudName}>
                    <Image publicId="https://res.cloudinary.com/demoryanzzheng/image/upload/v1629773406/olitjznhhfepgnyao255.png">
                      <Transformation/>
                    </Image>
                  </CloudinaryContext>
                </Box> */}
                <Box m={0}>
                  <CloudinaryContext key={message.id} cloudName={cloudinaryCloudName}>
                    <Image publicId="https://res.cloudinary.com/demoryanzzheng/image/upload/v1629676207/sample.jpg" width='150' >
                      <Transformation height="150" width="150" crop="fill" effect="sepia" radius="20" />
                    </Image>
                  </CloudinaryContext>
                </Box>
                {/* })} */}
              </Grid>
            </Box>
          ) : (
            <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
          );
        })}
      <Box ref={messageEndRef} />
    </Box>
  );
};

export default Messages;
