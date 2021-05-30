import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';
import './entry.style.css';

export const Entry = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Fill the form');
    }

    // TODO call api to submit form
    console.log(email, password);
  }

  const formSwitcher = frmtype => {
    setFrmLoad(frmtype);
  }

  const handleOnResetSubmit = e => {
    e.preventDefault();

    if (!email) {
      return alert('Fill the email');
    }

    // TODO call api to submit form
    console.log(email);
  }

  return (
    <div className="entry-page">
      <Jumbotron className="border">
        {frmLoad === 'login' && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === 'rest' && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  )
}