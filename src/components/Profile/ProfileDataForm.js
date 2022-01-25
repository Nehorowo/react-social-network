import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import style from '../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Full Name:
        {
          <Field
            placeholder="Full Name"
            name="fullName"
            component={Input}
            type="text"
            validate={[]}
          />
        }
      </h3>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Save</button>
      </div>
      <p>
        About me:
        {
          <Field
            placeholder="About me"
            name="aboutMe"
            component={Input}
            type="text"
            validate={[]}
          />
        }
      </p>
      <p>
        Looking for a job:
        {<Field name="lookingForAJob" component={Input} type="checkBox" validate={[]} />}
      </p>
      <p>
        My professional skills:
        {
          <Field
            placeholder="My professional skills"
            name="lookingForAJobDescription"
            component={Input}
            type="textArea"
            validate={[]}
          />
        }
      </p>
      <p>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={''}>
              <b>
                {key}:
                <Field
                  placeholder={profile.contacts[key]}
                  name={'contacts.' + key}
                  component={Input}
                  type="text"
                  validate={[]}
                />
              </b>
            </div>
          );
        })}
      </p>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'editProfile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
