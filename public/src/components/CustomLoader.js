import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

class CustomLoader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="loader"
        style={{display: this.props.visible ? 'block' : 'none'}}
      >
        <Segment>
          <Dimmer active>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        </Segment>
      </div>
    );
  }
}

CustomLoader.propTypes = {
  visible: PropTypes.bool
};

export default CustomLoader;
