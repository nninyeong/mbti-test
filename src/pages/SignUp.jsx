import { useState } from 'react';
import FormInput from '../components/Input/FormInput.jsx';
import Button from '../components/Input/Button.jsx';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  return (
    <div className='flex flex-col justify-center items-center bg-white w-[500px] p-8 rounded shadow-md'>
      <h2 className='font-bold mb-2'>회원가입</h2>
      <form className='border rounded p-5 max-w-[800px] bg-gray-200 flex flex-col justify-center items-center gap-5 py-[30px]'>
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
        <FormInput
          placeholder='닉네임'
          name='nickname'
          type='text'
          value={formValue}
          setValue={setFormValue}
          className='w-[300px]'
        />
        <Button
          type='submit'
          className='rounded w-full h-[35px] bg-primary-bg-red font-bold text-point-red'
        >
          회원가입
        </Button>
        <div className='flex gap-2'>
          <p>이미 계정이 있으신가요?</p>
          <Link
            to='/sign-in'
            className='font-bold text-point-red'
          >
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
