import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
      {props.captchaUrl && (
        <Field
          placeholder="Type here captcha text"
          name="captcha"
          component={Input}
          type="text"
          validate={[required]}
        />
      )}
      <div>
        <Field
          placeholder="email"
          name="email"
          component={Input}
          type="text"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          component={Input}
          type="password"
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        Remember me
      </div>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
