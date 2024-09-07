import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const isSignedIn = true;
  const { pathname } = useLocation();

  if (!isSignedIn) {
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
