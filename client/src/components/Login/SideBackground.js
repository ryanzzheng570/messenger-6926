import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Icon,
  Typography
} from '@material-ui/core';
import bubbleImg from "../../images/bubble.svg";
import backgroundImg from "../../images/bg-img.png";

const useStyles = makeStyles((theme) => ({
  backgroundImg: {
    background: `linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${backgroundImg})`,
    backgroundSize: 'cover',
    padding: theme.spacing(20, 2),
    textAlign: 'center'
  },
  p: {
    marginLeft: `${theme.spacing(2)}%`,
    marginRight: `${theme.spacing(2)}%`,
    marginTop: theme.spacing(3),
    lineHeight: theme.typography.lineHeight,
    color: theme.palette.common.white
  }
}));


const SideBackground = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.backgroundImg}>
        <Icon>
          <img src={bubbleImg} alt="bubble-icon" />
        </Icon>
        <Typography variant='h5' className={classes.p}>Converse with anyone with any language</Typography>
      </Box>
    </>
  )
}

export default SideBackground
