import Home from '../pages/Home.jsx';
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import Profile from '../pages/Profile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Results from '../pages/Results.jsx';
import Test from '../pages/Test.jsx';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import NonAuthenticatedRoute from './NonAuthenticatedRoute.jsx';

const Router = () => {
  const publicRoutes = [
    {
      path: '/',
      element: <Home />,
    },
  ];

  const routesForNonAuthenticatedOnly = [
    {
      path: '/',
      element: <NonAuthenticatedRoute />,
      children: [
        {
          path: 'sign-in',
          element: <SignIn />,
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        },
      ],
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: <Profile />,
        },
        {
          path: 'results',
          element: <Results />,
        },
        {
          path: 'test',
          element: <Test />,
        },
      ],
    },
  ];

  const notFound = {
    path: '*',
    element: <Navigate to='/' />,
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [...publicRoutes, ...routesForNonAuthenticatedOnly, ...routesForAuthenticatedOnly, notFound],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
