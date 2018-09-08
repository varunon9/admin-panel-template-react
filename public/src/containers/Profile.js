import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropType from 'prop-types';
import autoBind from 'react-autobind';
import {
  Grid,
  Button,
  Form,
  Header,
  Input,
  Icon
} from 'semantic-ui-react';

import { updateProfile } from '../actions/AuthAction';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      profile: this.props.profile
    };
  }

  onFirstNameChange(firstName) {
    const profile = Object.assign({}, this.state.profile);
    profile.firstName = firstName;
    this.setState({
      profile
    });
  }

  onLastNameChange(lastName) {
    const profile = Object.assign({}, this.state.profile);
    profile.lastName = lastName;
    this.setState({
      profile
    });
  }

  onGenderChange(gender) {
    const profile = Object.assign({}, this.state.profile);
    profile.gender = gender;
    this.setState({
      profile
    });
  }

  onPasswordChange(password) {
    const profile = Object.assign({}, this.state.profile);
    profile.password = password;
    this.setState({
      profile
    });
  }

  onProfileUpdateClick() {
    this.props.updateProfile(this.state.profile);
  }

  render() {
    return (
      <div>
        <Header as="h2">
          Your Profile
        </Header>
        <Form>
          <Grid stackable columns={3}>
            <Grid.Column>
              <Form.Field>
                <label>First Name</label>
                <Input
                  icon="user"
                  iconPosition="left"
                  type="text"
                  defaultValue={this.state.profile.firstName}
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
                  defaultValue={this.state.profile.lastName}
                  onChange={
                    (event) => {
                      this.onLastNameChange(event.target.value);
                    }
                  }
                  placeholder="Last Name" />
              </Form.Field>
            </Grid.Column>
            
            <Grid.Column>
              <Form.Field>
                <label>Gender</label>
                <Form.Group inline className="top-margin">
                  <Form.Radio
                    label="Male"
                    value="male"
                    checked={this.state.profile.gender === 'male'}
                    onChange={(e, target) => {
                      this.onGenderChange(target.value);}
                    }
                  />
                  <Form.Radio
                    label="Female"
                    value="female"
                    checked={this.state.profile.gender === 'female'}
                    onChange={(e, target) => {
                      this.onGenderChange(target.value);}
                    }
                  />
                </Form.Group>
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Mobile</label>
                <Input
                  disabled
                  icon="mobile"
                  iconPosition="left"
                  type="number"
                  defaultValue={this.state.profile.mobile}
                  placeholder="10 digits mobile number" />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Email</label>
                <Input
                  disabled
                  icon="at"
                  iconPosition="left"
                  type="email"
                  defaultValue={this.state.profile.email}
                  placeholder="Your Email" />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Password</label>
                <Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  defaultValue={this.state.profile.password}
                  onChange={
                    (event) => {
                      this.onPasswordChange(event.target.value);
                    }
                  }
                  placeholder="Set a new password" />
              </Form.Field>
            </Grid.Column>
          </Grid>

          <Grid columns={7}>
            <Grid.Column>
              <Button primary fluid 
                type="submit" onClick={this.onProfileUpdateClick}
              >
                <Icon name="edit" />
                Update
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropType.object,
  updateProfile: PropType.func
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (profile) => {
    dispatch(updateProfile(profile));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
