import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Login <Link to="/signup">Test</Link>
      </div>
    );
  }
}

export default Login;
