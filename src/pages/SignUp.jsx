import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../api/auth.js';
import { Navigate } from 'react-router-dom';
import AuthForm from '../components/Input/AuthForm.jsx';

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const [signedUp, setSignedUp] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { message, success } = await register(formValue);

    let alertMessage = message;
    if (success) {
      alertMessage += ' 로그인해주세요!';
    }

    alert(alertMessage);
    setSignedUp(success);
  };

  if (signedUp) {
    return (
      <Navigate
        to='/sign-in'
        replace={true}
      />
    );
  }

  return (
    <div className='flex flex-col justify-center items-center self-center gap-5 bg-white w-[500px] p-10 rounded shadow-md'>
      <h2 className='font-bold mb-2'>회원가입</h2>
      <AuthForm
        mode='signup'
        onSubmit={handleSignUp}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <div className='flex gap-2'>
        <p>이미 계정이 있으신가요?</p>
        <Link
          to='/sign-in'
          className='font-bold text-point-red'
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
