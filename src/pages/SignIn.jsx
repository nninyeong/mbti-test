import { useContext, useState } from 'react';
import { login } from '../api/auth.js';
import { userContext } from '../context/userContextProvider.jsx';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../components/Input/FormInput.jsx';
import Button from '../components/Input/Button.jsx';

const SignIn = () => {
  const [formValue, setFormValue] = useState({ id: '', password: '' });

  const { setLogin } = useContext(userContext);
  const [logedIn, setLogedIn] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { accessToken, userId, success, avatar, nickname } = await login(formValue);

    let alertMessage;
    if (success) {
      setLogin(accessToken);
      alertMessage = '로그인 성공! 마이페이지로 이동합니다.';
    } else {
      alertMessage = '아이디/비밀번호를 다시 확인해주세요.';
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
    <div className='flex flex-col justify-center items-center bg-white w-[500px] p-8 rounded shadow-md'>
      <h2 className='font-bold mb-2'>로그인</h2>
      <form
        className='border rounded p-5 max-w-[800px] bg-gray-200 flex flex-col justify-center items-center gap-5 py-[30px]'
        onSubmit={handleSignIn}
      >
        <FormInput
          placeholder='아이디'
          name='id'
          type='text'
          value={formValue}
          setValue={setFormValue}
          className='w-[300px]'
        />
        <FormInput
          placeholder='비밀번호'
          name='password'
          type='password'
          value={formValue}
          setValue={setFormValue}
          className='w-[300px]'
        />
        <Button
          type='submit'
          className='rounded w-full h-[35px] bg-primary-bg-red font-bold text-point-red'
        >
          로그인
        </Button>
        <div className='flex gap-2'>
          <p>계정이 없으신가요?</p>
          <Link
            to='/sign-up'
            className='font-bold text-point-red'
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
