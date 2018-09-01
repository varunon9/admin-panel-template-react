import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import Profile from './Profile';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.url}`} component={Dashboard} />
        <Route path={`${this.props.match.url}profile`} component={Profile} />
      </Switch>
    );
  }
}

Layout.propTypes = {
  match: PropTypes.object
};

export default withRouter(connect()(Layout));
