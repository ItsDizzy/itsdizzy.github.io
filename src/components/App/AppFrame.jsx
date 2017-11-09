import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

import AppDrawer from './AppDrawer';
import AppNav from './AppNav';

const styles = theme => ({
  '@global': {
    html: {

    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      WebkitFontSmoothing: 'antialiased'
    }
  },
  appFrame: {
    // display: 'flex',
    // alignItems: 'stretch',
    minHeight: '100vh',
    minwidth: '100%'
  },
  grow: {
    flex: '1 1 auto'
  }
});

class AppFrame extends Component {
  state = {
    drawerOpen: false,
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.appFrame}>

        <AppNav onMenuClick={this.handleDrawerToggle} />
        <AppDrawer open={this.state.drawerOpen} onRequestClose={this.handleDrawerClose} />

        {children}

      </div>
    );
  }
}

export default withStyles(styles)(AppFrame);
