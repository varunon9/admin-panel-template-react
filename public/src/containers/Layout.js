import React from 'react';
import { 
  Switch, 
  Route, 
  withRouter, 
  Link, 
  NavLink 
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Dropdown, Icon, Grid, Segment } from 'semantic-ui-react';

import { logout } from '../actions/AuthAction';
import Dashboard from './Dashboard';
import Profile from './Profile';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  getDropdownMenuTrigger() {
    const trigger = (
      <span>
        <Icon name="user" />
        Hello {this.props.profile.firstName}
      </span>
    );
    return trigger;
  }

  getDropdownMenuOptions() {
    const options = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>{this.props.email}</strong>
          </span>
        ),
        disabled: true,
      },
      { 
        key: 'profile',
        text: (
          <Link to="/profile">Your Profile</Link>
        )
      },
      { 
        key: 'logout',
        text: (
          <Link to="/logout" onClick={() => {this.props.logout();}}>
            Logout
          </Link>
        )
      }
    ];
    return options;
  }

  render() {
    return (
      <div>
        <Menu id="layoutMenu">
          <div id="menuLogo">
            <img src="static/images/logo.png" />
          </div>
          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown
                trigger={this.getDropdownMenuTrigger()}
                options={this.getDropdownMenuOptions()}
              />
            </Menu.Item>
            <Menu.Item>
              <Link to="/help">Help</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid id="layoutContainer">
          <Grid.Row>
            <Grid.Column width={3}>
              <Segment id="layoutSidebar">
                <Grid>
                  <Grid.Column width={16}>
                    <Icon name="grid layout" />
                    &nbsp;&nbsp;
                    <NavLink exact to="/" activeClassName="active">
                      Dashboard
                    </NavLink>
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Icon name="grid layout" />
                    &nbsp;&nbsp;
                    <NavLink to="/profile" activeClassName="active">
                      Profile
                    </NavLink>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={13}>
              <Switch>
                <Route exact 
                  path={`${this.props.match.url}`} component={Dashboard} 
                />
                <Route 
                  path={`${this.props.match.url}profile`} component={Profile} 
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Layout.propTypes = {
  match: PropTypes.object,
  profile: PropTypes.object,
  email: PropTypes.string,
  logout: PropTypes.func
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  email: state.auth.email
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
