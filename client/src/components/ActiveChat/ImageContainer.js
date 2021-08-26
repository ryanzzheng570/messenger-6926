import React from 'react'
import { Image } from 'cloudinary-react'
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        '& div:only-child': {
            margin: 0,
            '& img': {
                width: 300,
                height: 300,
                objectFit: 'contain',
                margin: 0
            }
        }
    },
    image: {
        borderRadius: 5,
        width: 180,
        height: 150,
        objectFit: 'contain',
        marginLeft: 2
    }
}));

const ImageContainer = ({ attachments }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {attachments.map((attachment, index) => (
                <Box key={index} >
                    <Image
                        className={classes.image}
                        publicId={attachment}
                        cloudName={process.env.REACT_APP_cloudinaryCloudName}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default ImageContainer
