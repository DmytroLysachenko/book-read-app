import { Field, Form, Formik } from 'formik';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/auth/operations';
import { RedStar } from '../RedStar/RedStar';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }, actions) => {
        dispatch(logInThunk({ email, password }));
        actions.resetForm();
      }}
    >
      <Form className=" flex flex-col gap-5 mt-7">
        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="email"
        >
          <div>
            Email <span className="text-orangeBtn inline">*</span>
          </div>
          <Field
            type="email"
            name="email"
            placeholder="your@email.com"
            className="py-3 px-2 text-placeholder_text bg-google_white font-normal"
          />
        </label>

        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="password"
        >
          <div>
            Password <span className="text-orangeBtn inline">*</span>
          </div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="py-3 px-2 text-placeholder_text bg-google_white font-normal"
          />
        </label>
        <Button
          type={'submit'}
          className={'py-5 w-70'}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};
