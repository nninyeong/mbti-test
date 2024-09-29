import { forwardRef } from 'react';

const TestSubmitButton = forwardRef(({ children }, ref) => {
  return (
    <button
      ref={ref}
      type='submit'
      className='rounded bg-point-red text-white w-full'
    >
      {children}
    </button>
  );
});

export default TestSubmitButton;
