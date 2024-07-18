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
          <div>
            Name <span className="text-orangeBtn inline">*</span>
          </div>
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
          <div>
            Email <span className="text-orangeBtn inline">*</span>
          </div>
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
          <div>
            Password <span className="text-orangeBtn inline">*</span>
          </div>
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
          <div>
            Confirm password <span className="text-orangeBtn inline">*</span>
          </div>
          <Field
            type="password"
            name="confirmPassword"
            placeholder="..."
            className="py-3 px-2 placeholder:text-placeholder_text bg-google_white font-normal text-black"
          />
        </label>
        <Button
          type={'submit'}
          className={'py-5 w-70'}
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};
