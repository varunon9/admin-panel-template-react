import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
/*import {
  Segment
} from 'semantic-ui-react';*/

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.object
};

export default connect()(Dashboard);
