import { useContext, useState } from 'react';
import { login } from '../api/auth.js';
import { userContext } from '../context/userContextProvider.jsx';
import { Link, Navigate } from 'react-router-dom';
import AuthForm from '../components/Input/AuthForm.jsx';

const SignIn = () => {
  const [formValue, setFormValue] = useState({ id: '', password: '' });

  const { setLogin } = useContext(userContext);
  const [logedIn, setLogedIn] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { accessToken, userId, nickname, success } = await login(formValue);
    let alertMessage;
    if (success) {
      setLogin(accessToken, { userId, nickname });
      alertMessage = '로그인 성공! 마이페이지로 이동합니다.';
    } else {
      alertMessage = '아이디/비밀번호를 다시 확인해주세요.';
      return;
    }

    alert(alertMessage);
    setLogedIn(true);
  };

  if (logedIn) {
    return (
      <Navigate
        to='/profile'
        replace={true}
      />
    );
  }

  return (
    <div className='flex flex-col justify-center items-center self-center gap-5 bg-white w-[500px] h-[400px] p-8 rounded shadow-md'>
      <h2 className='font-bold mb-2'>로그인</h2>
      <AuthForm
        mode='signin'
        onSubmit={handleSignIn}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <div className='flex gap-2'>
        <p>계정이 없으신가요?</p>
        <Link
          to='/sign-up'
          className='font-bold text-point-red'
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
