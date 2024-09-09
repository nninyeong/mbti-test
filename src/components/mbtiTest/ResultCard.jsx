import Button from '../Input/Button.jsx';
import { useContext, useState } from 'react';
import { userContext } from '../../context/userContextProvider.jsx';
import { useToggleIsPublic } from '../../api/testResults.js';

const ResultCard = ({ result }) => {
  const { userProfile } = useContext(userContext);
  const { nickname, testResult, date, isPublic, userId } = result;
  const isMyResult = userProfile.userId === userId;

  const { mutateIsPublic } = useToggleIsPublic();
  const [isPublicCard, setIsPublicCard] = useState(isPublic);

  const handleTogglePublic = () => {
    setIsPublicCard(!isPublicCard);
    mutateIsPublic(result);
  };
  return (
    <div className='flex flex-col justify-center items-center w-[400px]'>
      <div className='flex flex-row justify-center items-center font-bold text-2xl text-white bg-point-red w-full h-[45px] rounded-t'>
        {nickname} 님
        {isMyResult ? (
          <Button
            className='bg-primary-bg-red rounded p-1 h-[30px] font-medium text-lg text-gray-600'
            type='button'
            onClick={handleTogglePublic}
          >
            {isPublicCard ? '숨기기' : '공개하기'}
          </Button>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start bg-white w-full p-5 rounded-b'>
        <div className='font-bold text-xl'>{testResult}</div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ResultCard;
