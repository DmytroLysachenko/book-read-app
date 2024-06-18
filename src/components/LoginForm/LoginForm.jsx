import { Field, Form, Formik } from 'formik';

import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/auth/operations';
export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }) => {
        dispatch(logInThunk({ email, password }));
      }}
    >
      <Form className=" flex flex-col gap-5 mt-7">
        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="email"
        >
          Email
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
          Password
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="py-3 px-2 text-placeholder_text bg-google_white font-normal"
          />
        </label>
        <Button
          type={'submit'}
          width={'280px'}
          padding={'20px 0'}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};
