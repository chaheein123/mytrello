import React from 'react';
import "./sign-in-sign-up.styles.scss";
import SignIn from "../signin/signin.component";
import SignUp from "../signup/signup.component";

export const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up round-borders">
    <div className="flex-sign-in-and-sign-up round-borders">
      <SignIn />
      <SignUp />
    </div>
  </div>
)
