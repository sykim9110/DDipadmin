import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Lock from './svg/lock';

const LoginAdmin = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div id="sy-login-container" className="container-fluid">
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <Lock />
            <Field name="id" component="input" type="id" placeholder="id" />
            <Field name="password" component="input" type="password" placeholder="password" />
            <button type="submit" disabled={pristine || submitting}>3idiots login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'user'  // a unique identifier for this form
})(LoginAdmin);
