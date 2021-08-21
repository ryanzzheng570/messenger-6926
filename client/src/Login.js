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
import { makeStyles } from "@material-ui/core/styles";
import SideBackground from "./components/Login/SideBackground";
import { borderBottom, borderRadius, color } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "75vh",
    '& .MuiButton-root': {
      fontFamily: 'Montserrat, sans-serif',
    }
  },
  info_container_signup: {
    marginTop: '20px',
    paddingRight: '30px',
  },
  form_container: {
    width: '33%',
    border: '1px solid lightgrey',
    borderRadius: '5px'
  },
  form: {
    padding: '140px 90px',
    '& input': {
      marginTop: '20px',
    },
    '& label.Mui-focused': {
      color: '#8e8e8e',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#8e8e8e',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3A8DFF',
    },
  },
  btn_createAcc: {
    padding: '15px 30px',
    color: '#3A8DFF',
    boxShadow: '0 0 10px #ccc',
  },
  create_account_info: {
    marginTop: '15px',
    marginRight: '20px',
    fontSize: '13px',
    color: 'grey',
  },

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
    <Grid container justifyContent="center" className={classes.container}>
      <SideBackground />
      <Box className={classes.form_container}>
        <Grid container item justifyContent="flex-end" className={classes.info_container_signup}>
          <Typography align='right' className={classes.create_account_info}>Don't have an account?</Typography>
          <Button
            variant="outlined"
            className={classes.btn_createAcc}
            onClick={() => history.push("/register")}
          >Create an Account</Button>
        </Grid>
        <form className={classes.form} onSubmit={handleLogin}>
          <Grid justifyContent='center'>
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>Welcome back!</Typography>
            <Grid className={classes.input}>
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
                />
              </FormControl>
            </Grid>
            <Grid justifyContent='flex-end'>
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
