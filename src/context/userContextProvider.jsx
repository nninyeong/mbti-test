import { createContext, useEffect, useState } from 'react';
import { fetchProfile } from '../api/auth.js';

const accessToken = localStorage.getItem('accessToken');

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    if (isAuthenticated && !userProfile) {
      (async () => {
        const { success, id, nickname } = await fetchProfile(accessToken);
        if (success) {
          setUserProfile({ userId: id, nickname: nickname });
        } else {
          localStorage.removeItem('accessToken');
          window.location.reload();
        }
      })();
    }
  }, []);

  const setLogin = (token, userInfo) => {
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
    setUserProfile(userInfo);
  };

  const setLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <userContext.Provider value={{ isAuthenticated, setLogin, setLogout, userProfile, setUserProfile }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
