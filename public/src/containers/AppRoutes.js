import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';

class AppRoutes extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  isAuthenticated() {
    if (this.props.email && this.props.authToken) {
      return true;
    }
    return false;
  }

  authenticateAndRender() {
    if (this.isAuthenticated) {
      return <Dashboard />;
    } else {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" render={this.authenticateAndRender} />
      </Switch>
    );
  }
}

AppRoutes.propTypes = {
  email: PropTypes.string,
  authToken: PropTypes.string
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  authToken: state.auth.authToken
});

export default connect(mapStateToProps)(AppRoutes);
