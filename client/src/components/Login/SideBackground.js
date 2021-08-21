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
      background: `linear-gradient(rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${backgroundImg})` ,
      backgroundSize: 'cover',
      padding: '200px 20px 200px 20px',
      textAlign: 'center',
      height: '-webkit-fill-available'
    },
    p: {
      fontSize: '20px',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '30px',
      color: 'white',
      lineHeight: '1.8'
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
                <Typography className={classes.p}>Converse with anyone with any language</Typography>
            </Box>
        </>
    )
}

export default SideBackground
