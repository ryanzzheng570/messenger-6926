import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Icon
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import backgroundImg from "./images/bg-img.png";
import chatIcon from "./images/chatIcon.png";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  backgroundImage: `url(${backgroundImg})`,
}));

const Login = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center">
      <Box>
      <Icon className={classes.backgroundImage}>
        <img src={chatIcon} alt="chat-icon" />
        <Typography>Converse with anyone with any language</Typography>
      </Icon>
        {/* <img src={backgroundImg} alt='login-pic'/> */}
      </Box>
      <Box>
        <Grid container item>
          <Typography>Need to register?</Typography>
          <Button onClick={() => history.push("/register")}>Register</Button>
        </Grid>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button type="submit" variant="contained" size="large">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
