import Button from '../Input/Button.jsx';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContextProvider.jsx';
import { useDeleteResult, useToggleIsPublic } from '../../api/testResults.js';
import mbtiDescriptions from '../../data/mbtiDescriptions.js';

const ResultCard = ({ result }) => {
  const { userProfile } = useContext(UserContext);
  const { nickname, testResult, date, isPublic, userId } = result;
  const isMyResult = userProfile.userId === userId;

  const { mutateIsPublic } = useToggleIsPublic();
  const [isPublicCard, setIsPublicCard] = useState(isPublic);

  const handleTogglePublic = () => {
    setIsPublicCard(!isPublicCard);
    mutateIsPublic(result);
  };

  const { mutateDelete, isSuccess: isDeleteSuccess, isPending } = useDeleteResult();
  if (isDeleteSuccess) return;

  const cardContent = () => {
    if (isPending) {
      return <p>삭제중...</p>;
    } else {
      return (
        <>
          <div className='font-bold text-xl'>{testResult}</div>
          <p>{mbtiDescriptions[testResult]}</p>
          <span>{date}</span>
        </>
      );
    }
  };

  const deleteResult = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutateDelete(result);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-[550px]'>
      <div className='flex flex-row justify-center items-center font-bold text-2xl text-white bg-point-red w-full h-[45px] rounded-t'>
        {nickname} 님
        {isMyResult ? (
          <>
            <Button
              className='bg-primary-bg-red rounded ml-2 p-1 h-[30px] font-medium text-lg text-gray-600'
              type='button'
              onClick={handleTogglePublic}
            >
              {isPublicCard ? '숨기기' : '공개하기'}
            </Button>
            <Button
              className='bg-primary-bg-red rounded ml-2 p-1 h-[30px] font-medium text-lg text-gray-600'
              type='button'
              onClick={deleteResult}
            >
              삭제하기
            </Button>
          </>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start bg-white w-full p-5 rounded-b'>{cardContent()}</div>
    </div>
  );
};

export default ResultCard;
