import { Field, Form, Formik } from 'formik';

import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      onSubmit={({ name, email, password }, actions) => {
        dispatch(registerThunk({ name, email, password }));
        actions.resetForm();
      }}
    >
      <Form className=" flex flex-col gap-5 mt-7">
        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="name"
        >
          Name
          <Field
            type="text"
            name="name"
            placeholder="..."
            className="py-3 px-2 placeholder:text-placeholder_text bg-google_white font-normal text-black"
          />
        </label>
        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="email"
        >
          Email
          <Field
            type="email"
            name="email"
            placeholder="your@email.com"
            className="py-3 px-2 placeholder:text-placeholder_text bg-google_white font-normal text-black"
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
            placeholder="..."
            className="py-3 px-2 placeholder:text-placeholder_text bg-google_white font-normal text-black"
          />
        </label>
        <label
          className="flex flex-col gap-2 text-white font-semibold text-sm"
          htmlFor="confirmPassword"
        >
          Confirm password
          <Field
            type="password"
            name="confirmPassword"
            placeholder="..."
            className="py-3 px-2 placeholder:text-placeholder_text bg-google_white font-normal text-black"
          />
        </label>
        <Button
          type={'submit'}
          width={'280px'}
          padding={'20px 0'}
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};
