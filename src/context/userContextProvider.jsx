import { createContext, useState } from 'react';

const accessToken = localStorage.getItem('accessToken');

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);

  const setLogin = (token) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const setLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return <userContext.Provider value={{ isAuthenticated, setLogin, setLogout }}>{children}</userContext.Provider>;
};

export default UserContextProvider;
