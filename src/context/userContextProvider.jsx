import { createContext, useState } from 'react';

const accessToken = localStorage.getItem('accessToken');

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);
  const [userProfile, setUserProfile] = useState({
    userId: '',
    nickname: '',
  });

  // TODO: 접속시 이미 accessToken이 있는 경우 바로 userProfile 받아오기
  if (isAuthenticated) {
  }

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
