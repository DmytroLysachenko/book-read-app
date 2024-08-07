import { Link, NavLink } from 'react-router-dom';
import { PiBookOpenText, PiHouseLineLight } from 'react-icons/pi';
import { selectUserName } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { avatarName } from '../../helpers/avatarName';
import { logOutThunk } from '../../redux/auth/operations';
import {
  activeLinkClass,
  headerAfterClass,
  linkClass,
} from '../../css/classes';

export const UserHeader = ({ newPlanning, openConfirmModal }) => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <header
      className={
        'h-15 px-5 flex items-center justify-between bg-white relative' +
        headerAfterClass
      }
    >
      <Link
        to={'/'}
        className="text-xl font-AbrilFatface font-logo"
      >
        BR
      </Link>
      <div className="flex">
        <nav className="flex gap-3 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
            to={'/library'}
          >
            <PiBookOpenText
              className="w-6 h-6"
              color="#A6ABB9"
            />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
            to={'/'}
          >
            <PiHouseLineLight
              className="w-5 h-5"
              color="#A6ABB9"
            />
          </NavLink>
        </nav>
        <div className="divider divider-horizontal m-0 ml-2 mr-3 w-0 after:w-px  before:w-px "></div>
        <div className="flex gap-3">
          <div className="avatar placeholder">
            <div className="bg-gray-200 rounded-full w-8">
              <span className="text-sm font-semibold">
                {avatarName(userName)}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="text-sm underline font-light "
            onClick={() => {
              if (
                newPlanning.books.length ||
                newPlanning.startDate ||
                newPlanning.endDate
              ) {
                openConfirmModal();
              } else {
                dispatch(logOutThunk());
              }
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
