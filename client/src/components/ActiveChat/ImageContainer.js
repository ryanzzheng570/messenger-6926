import React from 'react'
import { Image } from 'cloudinary-react'
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: 5
    }
}));

const ImageContainer = ({ message }) => {
    const classes = useStyles();

    return (
        message.attachments && message.attachments.map((attachment, index) => (
            <Box key={index} m={0}>
                <Image
                    className={classes.image}
                    publicId={attachment}
                    cloudName={process.env.REACT_APP_cloudinaryCloudName}
                />
            </Box>
        ))
    )
}

export default ImageContainer
