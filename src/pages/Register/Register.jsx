import { Link } from 'react-router-dom';
import { GoogleBtn } from '../../components/GoogleBtn/GoogleBtn';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <div className="h-noHeaderMob overflow-y-auto  bg-mob_auth bg-bgOverlay bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col justify-center items-center px-5 py-8">
        <GoogleBtn />
        <RegisterForm />
        <p className="text-gray_text mt-5">
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
