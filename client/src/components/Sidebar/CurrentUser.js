import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { BadgeAvatar } from "./index";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(() => ({
  root: {
    height: 44,
    marginTop: 23,
    marginLeft: 6,
    display: "flex",
    alignItems: "center"
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1
  },
  username: {
    letterSpacing: -0.23,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 17
  },
  ellipsis: {
    color: "#95A7C4",
    opacity: 0.5
  },
  list: {
    width: 250
  }
}));

const CurrentUser = (props) => {
  const classes = useStyles();
  const [isDrawerOn, setIsDrawerOn] = useState(false);

  const user = props.user || {};

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOn(open);
  }

  return (
    <Box className={classes.root}>
      <BadgeAvatar photoUrl={user.photoUrl} online={true} />
      <Box className={classes.subContainer}>
        <Typography className={classes.username}>{user.username}</Typography>
        <IconButton onClick={toggleDrawer(true)} style={{ marginRight: '24px' }}>
          <MoreHorizIcon classes={{ root: classes.ellipsis }} />
        </IconButton>
      </Box>
      <Drawer anchor={'left'} open={isDrawerOn} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
          <ListItem button key={'Logout'} onClick={() => props.logout()}>
            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(CurrentUser);
