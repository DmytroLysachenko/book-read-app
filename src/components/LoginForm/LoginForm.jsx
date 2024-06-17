import { Field, Form, Formik } from 'formik';

import { Button } from '../Button/Button';
export const LoginForm = () => {
  return (
    <Formik>
      <Form className=" flex flex-col gap-5">
        <label
          className="flex flex-col gap-2 text-white "
          htmlFor="email"
        >
          Email
          <Field
            type="email"
            name="email"
            placeholder="your@email.com"
            className="py-3 px-2 text-placeholder_text bg-google_white"
          />
        </label>

        <label
          className="flex flex-col gap-2 text-white"
          htmlFor="password"
        >
          Password
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="py-3 px-2 text-placeholder_text bg-google_white"
          />
        </label>
        <Button
          type={'submit'}
          width={'280px'}
          padding={'20px 0'}
        >
          Log in
        </Button>
      </Form>
    </Formik>
  );
};
