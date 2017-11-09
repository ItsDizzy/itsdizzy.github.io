import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from 'material-ui';

import { Menu as MenuIcon } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

const styles = {
  grow: {
    flex: '1 1 auto'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppNav extends Component {
  render() {
    const { classes, onMenuClick } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.grow}>
              Dizzy
            </Typography>
            <Button color="contrast" component={Link} to="/">Home</Button>
            <Button color="contrast" component={Link} to="/about">About</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppNav);