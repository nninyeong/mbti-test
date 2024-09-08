import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userContext } from '../context/userContextProvider.jsx';
import { useContext } from 'react';

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(userContext);
  const { pathname } = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate
        to='/sign-in'
        replace
        state={{ redirectedForm: pathname }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
