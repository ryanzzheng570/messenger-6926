import React, { useState } from "react";
import { FormControl, FilledInput, IconButton, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import { cloudinary_endpoint } from "./utils/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  },
  input_icon: {
    opacity: 0.7,
  },
  image_info: {
    display: 'flex',
    marginRight: theme.spacing(0)
  }
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments.length > 0 ? attachments.map(file => file.secure_url) : null
    };

    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  //Handler to upload image to Cloudinary Server
  const handleUploadImage = async ({ target }) => {
    //Create HTTP body
    const formData = new FormData();
    formData.append('file', target.files[0]);
    formData.append('upload_preset', process.env.REACT_APP_upload_preset);

    try {
      const data = await fetch(cloudinary_endpoint, {
        method: 'POST',
        body: formData
      });

      let res = await data.json();
      setAttachments([...attachments, res]);
    } catch (error) {
      console.log(error);
    }
  }

  //Hanlder to allow an image to upload multiple times
  const handleMultipleUpload = (e) => {
    e.target.value = null;
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <Grid container>
          {attachments.length > 0 && (attachments.map((file, index) => (
            <Box key={index} className={classes.image_info}>
              <ImageIcon className={classes.input_icon} />
              <Typography>{file.original_filename}</Typography>
            </Box>))
          )}
        </Grid>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <>
              <IconButton color='secondary'>
                <InsertEmoticonIcon className={classes.input_icon} />
              </IconButton>
              <input hidden accept='image/*' id='icon-button-photo' onInput={handleUploadImage} onClick={handleMultipleUpload} type='file' />
              <label htmlFor='icon-button-photo'>
                <IconButton color='secondary' component='span'>
                  <ImageIcon className={classes.input_icon} />
                </IconButton>
              </label>
            </>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
