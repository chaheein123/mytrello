import React from 'react';
import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="signup">
        <div className="signup-container">
          <h2>Create Account</h2>
          <div className="facebook-icon icons"></div>
          <div className="google-icon icons"></div>
          <p className="email-registration-text">or use your email for registration</p>
          <input className="signup-inputs" placeholder="Email" type="email" />
          <input className="signup-inputs" placeholder="Password" type="password" />
          <input className="signup-inputs" placeholder="Confirm Password" type="password" />
          <div className="signup-button">
            <span className="signbutton-text">
              SIGN UP
            </span>
          </div>
        </div>
      </div>
    )
  }
};

export default SignUp;
