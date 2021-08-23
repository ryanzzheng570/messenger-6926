import React, { useState } from "react";
import { FormControl, FilledInput, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import { cloudinary_endpoint } from "./utils/Constants";

const useStyles = makeStyles(() => ({
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
      attachments: [attachments]
    };

    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  const uploadImage = async(files) => {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'eltw0zaf');

    const data = await fetch(cloudinary_endpoint, {
      method: 'POST',
      body: formData
    });

    let res = await data.json();
    return res.secure_url;
  }

  const handleUploadImage = ({ target }) => {
    const link = uploadImage(target.files)

  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
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
              <input hidden accept='image/*' id='icon-button-photo' onChange={handleUploadImage} type='file'/>
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
