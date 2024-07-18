import { Link } from 'react-router-dom';

import { GoogleBtn } from '../../components/GoogleBtn/GoogleBtn';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Quote } from '../../components/Quote/Quote';

const Login = () => {
  return (
    <div className="h-noHeaderMob overflow-y-auto">
      <div className="flex flex-col justify-center items-center bg-mob_auth bg-bgOverlay bg-no-repeat bg-cover bg-center px-5 py-8 ">
        <GoogleBtn />
        <LoginForm />
        <Link
          className="text-orangeBtn underline mt-4"
          to={'/register'}
        >
          Registration
        </Link>
      </div>
      <Quote />
    </div>
  );
};

export default Login;
