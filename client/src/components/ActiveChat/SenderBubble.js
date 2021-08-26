import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import ImageContainer from "./ImageContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: 'right',
  },
  bubble: {
    background: "#f4f4f5",
    borderRadius: "10px 10px 0 10px"
  },
  image_container: {
    '& div > div:only-child': {
      margin: 0,
      '& img': {
        width: 180,
        height: 150,
        objectFit: 'contain',
        margin: 0
      }
    }
  },
  noPadding: {
    padding: 0
  }
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Grid className={`${text ? classes.image_container : ''}`} container justifyContent='flex-end'>
        {attachments && (<ImageContainer attachments={attachments} />)}
      </Grid>
      <Box className={classes.bubble}>
        {text && (<Typography className={`${classes.text} ${attachments ? classes.noPadding : ''}`}>{text}</Typography>)}
      </Box>
    </Box>
  );
};

export default SenderBubble;
