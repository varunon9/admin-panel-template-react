import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout';
import Login from './Login';
import Signup from './Signup';
import CustomLoader from '../components/CustomLoader';

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
      <div>
        <CustomLoader visible={this.props.isLoading} />
        <Switch>
          <Route 
            exact 
            path="/login"
            render={
              () => (
                this.isAuthenticated() 
                  ? <Redirect to="/" /> : <Login />
              )
            }
          />
          <Route 
            exact 
            path="/signup"
            render={
              () => (
                this.isAuthenticated() 
                  ? <Redirect to="/" /> : <Signup />
              )
            }
          />
          <Route 
            path="/" 
            render={
              (props) => (
                this.isAuthenticated() 
                  ? <Layout {...props} /> : <Redirect to="/login" />
              )
            } 
          />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

AppRoutes.propTypes = {
  email: PropTypes.string,
  authToken: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  authToken: state.auth.authToken,
  isLoading: state.util.isLoading
});

export default withRouter(connect(mapStateToProps)(AppRoutes));
