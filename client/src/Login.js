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
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import SideBackground from "./components/Login/SideBackground";
import { useStyles } from "./components/Login/utils";

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
    <Grid container justifyContent="center" className={classes.container}>
      <SideBackground />
      <Box width={650}>
        <Grid container item justifyContent="flex-end" className={classes.info_container_signup}>
          <Typography
            color='textSecondary'
            align='right'
            className={classes.create_account_info}
          >
            Create an Account
          </Typography>
          <Button
            variant="outlined"
            color='primary'
            className={classes.btn_createAcc}
            onClick={() => history.push("/register")}
          >Create an Account</Button>
        </Grid>
        <form className={classes.form} onSubmit={handleLogin}>
          <Grid>
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>Welcome back!</Typography>
            <Grid>
              <FormControl fullWidth margin="normal" required>
                <TextField
                  aria-label="username"
                  label="User Name"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth margin="normal" required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                  InputProps={{
                    endAdornment:
                      <Button className={classes.btn_forgot} color='primary'>Forgot?</Button>
                  }}
                />
              </FormControl>

            </Grid>
            <Grid style={{ marginTop: '60px' }} container justifyContent='center'>
              <Button className={classes.btn_submit} color={'primary'} type="submit" variant="contained" size="large">
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
