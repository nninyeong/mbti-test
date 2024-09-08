import FormInput from './FormInput.jsx';
import Button from './Button.jsx';

const AuthForm = ({ mode, onSubmit, formValue, setFormValue }) => {
  return (
    <form
      className='border rounded p-5 max-w-[800px] bg-gray-200 flex flex-col justify-center items-center gap-5 py-[30px]'
      onSubmit={onSubmit}
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
      {mode === 'signup' ? (
        <FormInput
          placeholder='닉네임'
          name='nickname'
          type='text'
          value={formValue}
          setValue={setFormValue}
          className='w-[300px]'
        />
      ) : null}
      <Button
        type='submit'
        className='rounded w-full h-[35px] bg-primary-bg-red font-bold text-point-red'
      >
        {mode === 'signup' ? '회원가입' : '로그인'}
      </Button>
    </form>
  );
};

export default AuthForm;
