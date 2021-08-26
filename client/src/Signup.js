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
import { register } from "./store/utils/thunkCreators";
import { useStyles } from "./components/Login/utils";
import SideBackground from "./components/Login/SideBackground";

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center" className={classes.container}>
      <SideBackground />
      <Box width={650}>
        <Grid width={650} container item justifyContent="flex-end" className={classes.info_container_signup}>
          <Typography
            color='textSecondary'
            align='right'
            className={classes.create_account_info}
          >
            Already have an account?
          </Typography>
          <Button
            color='primary'
            variant="outlined"
            className={classes.btn_Login_Page}
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </Grid>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid>
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>Create An Account</Typography>
            <Grid>
              <FormControl fullWidth margin="normal">
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth margin="normal">
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
              </FormControl>
            </Grid>
            <Grid style={{ marginTop: '60px' }} container justifyContent='center'>
              <Button className={classes.btn_submit} color={'primary'} type="submit" variant="contained" size="large">
                Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
