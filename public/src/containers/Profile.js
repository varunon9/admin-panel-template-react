import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {

  constructor(props) {
    super(props);console.log(props);
  }

  render() {
    return <p>Profile</p>;
  }
}

export default withRouter(connect()(Profile));
