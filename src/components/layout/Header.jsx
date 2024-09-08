import { Link } from 'react-router-dom';
import { userContext } from '../../context/userContextProvider.jsx';
import { useContext } from 'react';
import Button from '../Input/Button.jsx';

const Header = () => {
  const { isAuthenticated, setLogout } = useContext(userContext);

  const handleLogout = () => {
    alert('로그아웃 완료!');
    setLogout();
  };

  return (
    <header className='fixed top-0 w-full flex justify-between items-center h-[50px] px-5 bg-white shadow-lg shadow-gray-500/50'>
      <div>
        <Link to='/'>홈</Link>
      </div>
      <div className='flex gap-3'>
        {isAuthenticated ? (
          <>
            <Link to='/test'>테스트</Link>
            <Link to='/results'>결과 보기</Link>
            <Link to='/profile'>프로필</Link>
            <Button
              type='button'
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </>
        ) : (
          <>
            <Link to='/sign-in'>로그인</Link>
            <Link to='/sign-up'>회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
