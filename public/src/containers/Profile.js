import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {

  constructor(props) {
    super(props);console.log(props);
  }

  render() {
    return (
      <div id="menuLogo">
        <img src="static/images/logo.png" />
      </div>
    );
  }
}

export default withRouter(connect()(Profile));
