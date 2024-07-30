import { Link } from 'react-router-dom';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div className="h-noHeaderMob overflow-y-auto  bg-mob_auth bg-bgOverlay bg-no-repeat bg-cover bg-center flex justify-center">
      <div className="my-auto">
        <RegisterForm />
        <p className="text-gray_text mt-5 mb-7 text-center">
          Already have an account?{' '}
          <Link
            to={'/login'}
            className="text-orangeBtn"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
