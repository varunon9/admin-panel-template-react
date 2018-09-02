import React from 'react';
import { Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import { 
  Menu, 
  Grid, 
  Segment,
  Button,
  Form,
  Header,
  Input,
  Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AgencyOfficeBanner from '../components/AgencyOfficeBanner';
import { signup } from '../actions/AuthAction';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      password: ''
    };
  }

  onFirstNameChange(firstName) {
    this.setState({
      firstName
    });
  }

  onLastNameChange(lastName) {
    this.setState({
      lastName
    });
  }

  onMobileChange(mobile) {
    this.setState({
      mobile
    });
  }

  onEmailChange(email) {
    this.setState({
      email
    });
  }

  onPasswordChange(password) {
    this.setState({
      password
    });
  }

  onSignupClick() {
    const { firstName, lastName, mobile, email, password } = this.state;
    this.props.signup({
      firstName, lastName, mobile, email, password
    });
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
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/help">Help</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid stackable columns={2} padded>
          <AgencyOfficeBanner />
          <Grid.Column>
            <Segment basic padded>
              <Header as="h2" textAlign="center">
                Register Here
              </Header>
              <Segment padded>
                <Form>
                  <Form.Field>
                    <Grid stackable columns={2}>
                      <Grid.Column>
                        <Form.Field>
                          <label>First Name</label>
                          <Input
                            icon="user"
                            iconPosition="left"
                            type="text"
                            defaultValue={this.state.firstName}
                            onChange={
                              (event) => {
                                this.onFirstNameChange(event.target.value);
                              }
                            }
                            placeholder="First Name" />
                        </Form.Field>
                      </Grid.Column>
                      <Grid.Column>
                        <Form.Field>
                          <label>Last Name</label>
                          <Input
                            icon="user"
                            iconPosition="left"
                            type="text"
                            defaultValue={this.state.lastName}
                            onChange={
                              (event) => {
                                this.onLastNameChange(event.target.value);
                              }
                            }
                            placeholder="Last Name" />
                        </Form.Field>
                      </Grid.Column>
                    </Grid>
                  </Form.Field>
                  <Form.Field>
                    <label>Mobile</label>
                    <Input
                      icon="mobile"
                      iconPosition="left"
                      type="number"
                      defaultValue={this.state.mobile}
                      onChange={
                        (event) => {
                          this.onMobileChange(event.target.value);
                        }
                      }
                      placeholder="10 digits mobile number" />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <Input
                      icon="at"
                      iconPosition="left"
                      type="email"
                      defaultValue={this.state.email}
                      onChange={
                        (event) => {
                          this.onEmailChange(event.target.value);
                        }
                      }
                      placeholder="Your Email" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Input
                      icon="lock"
                      iconPosition="left"
                      type="password"
                      defaultValue={this.state.password}
                      onChange={
                        (event) => {
                          this.onPasswordChange(event.target.value);
                        }
                      }
                      placeholder="Choose a strong password" />
                  </Form.Field>
                  <Form.Field>
                    <p>
                      By creating your account, you hereby agree to follow 
                      these&nbsp;
                      <Link to="terms-and-conditions">
                        terms and conditions
                      </Link>.
                    </p>
                  </Form.Field>
                  <Button primary fluid 
                    type="submit" onClick={this.onSignupClick}
                  >
                    <Icon name="add user" />
                    Register Me
                  </Button>
                  <Header as="h4" textAlign="center">
                    Already have an account?
                    &nbsp;&nbsp;
                    <Link to="/login">Login</Link>
                  </Header>
                </Form>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (params) => {
    dispatch(signup(params));
  }
});

Signup.propTypes = {
  signup: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Signup);
