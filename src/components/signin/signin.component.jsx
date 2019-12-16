import React from 'react';
import "./signin.styles.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="signin">
        <div className="signin-text">
          <h2>Welcome Back!</h2>
          <p>Please, login with your email and password if you already have registered</p>
          <div className="signbutton"><span className="signbutton-text">SIGN IN</span></div>
        </div>

      </div>
    )
  }
};

export default SignIn;
