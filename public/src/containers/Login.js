import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu id="menu">
          <div id="menuLogo">
            <img src="static/images/logo.png" />
          </div>
          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/signup">Signup</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/help">Help</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Login;
