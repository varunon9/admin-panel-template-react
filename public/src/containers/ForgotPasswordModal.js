import React from 'react';
import {
  Modal,
  Segment,
  Form,
  Button,
  Input,
  Icon,
  Header
} from 'semantic-ui-react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class ForgotPasswordModal extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <Modal
        open={this.props.modalData.isModalVisible}
        onClose={this.props.onModalClose}
        closeIcon
        size="small"
      >
        <Modal.Header>Reset Password</Modal.Header>
        <Modal.Content>
          <Segment padded>
            <Header as="h3" textAlign="center">
              Please enter your mobile number to receive OTP
            </Header>
            <Form>
              <Form.Field>
                <label>Mobile</label>
                <Input
                  icon="mobile"
                  iconPosition="left"
                  type="number"
                  defaultValue={this.props.modalData.mobile}
                  onChange={
                    (event) => {
                      this.props.onMobileChange(event.target.value);
                    }
                  }
                  placeholder="10 digits mobile number" />
              </Form.Field>

              {
                this.props.modalData.otpSent &&
                  <Form.Field>
                    <label>OTP</label>
                    <Input
                      icon="lock"
                      iconPosition="left"
                      type="number"
                      defaultValue={this.props.modalData.otp}
                      onChange={
                        (event) => {
                          this.props.onOtpChange(event.target.value);
                        }
                      }
                      placeholder="Received OTP" />
                  </Form.Field>
              }
              
              <Button primary fluid 
                type="submit" onClick={this.props.onSendOrVerifyOtpClick}
              >
                <Icon name="sign-in alternate" />
                {
                  this.props.modalData.otpSent
                    ? 'Verify OTP' : 'Send OTP'
                }
              </Button>
            </Form>
          </Segment>
        </Modal.Content>
      </Modal>
    );
  }
}

ForgotPasswordModal.propTypes = {
  modalData: PropTypes.object,
  onSendOrVerifyOtpClick: PropTypes.func,
  onModalClose: PropTypes.func,
  onMobileChange: PropTypes.func,
  onOtpChange: PropTypes.func
};

export default ForgotPasswordModal;
