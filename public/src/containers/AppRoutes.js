import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Layout from './Layout';
import Login from './Login';
import Signup from './Signup';
import NoMatch from '../components/NoMatch';

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

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route 
          path="/" 
          render={
            (props) => (
              this.isAuthenticated() 
                ? <Layout {...props} /> : <Redirect to="/login" />
            )
          } 
        />
        <Route component={NoMatch} />
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

export default withRouter(connect(mapStateToProps)(AppRoutes));
