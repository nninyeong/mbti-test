import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userContext } from '../context/userContextProvider.jsx';
import { useContext } from 'react';

const NonAuthenticatedRoute = () => {
  const { isAuthenticated } = useContext(userContext);
  const { pathname } = useLocation();
  if (isAuthenticated) {
    return (
      <Navigate
        to='/profile'
        state={{ redirectedForm: pathname }}
      />
    );
  }

  return <Outlet />;
};

export default NonAuthenticatedRoute;
