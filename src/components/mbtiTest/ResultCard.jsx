import Button from '../Input/Button.jsx';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContextProvider.jsx';
import { useDeleteResult, useToggleIsPublic } from '../../api/testResults.js';
import CardContent from './CardContent.jsx';

const ResultCard = ({ result }) => {
  const { userProfile } = useContext(UserContext);
  const { nickname, isPublic, userId } = result;
  const isMyResult = userProfile.userId === userId;

  const { mutateIsPublic } = useToggleIsPublic();
  const [isPublicCard, setIsPublicCard] = useState(isPublic);

  const handleTogglePublic = () => {
    setIsPublicCard(!isPublicCard);
    mutateIsPublic(result);
  };

  const { mutateDelete, isSuccess: isDeleteSuccess, isPending } = useDeleteResult();
  if (isDeleteSuccess) return;

  const deleteResult = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      mutateDelete(result);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-[80%] lg:w-[550px]'>
      <div className='flex flex-row justify-center items-center font-bold text-[15px] lg:text-2xl text-white bg-point-red w-full h-[25px] lg:h-[45px] rounded-t'>
        {nickname} 님
        {isMyResult ? (
          <>
            <Button
              className='bg-primary-bg-red rounded ml-2 p-1 w-[50px] lg:w-[80px] h-[80%] lg:h-[30px] leading-[10px] lg:leading-[18px] font-medium text-[10px] lg:text-[18px] text-gray-600'
              type='button'
              onClick={handleTogglePublic}
            >
              {isPublicCard ? '숨기기' : '공개하기'}
            </Button>
            <Button
              className='bg-primary-bg-red rounded ml-2 p-1 w-[50px] lg:w-[80px] h-[80%] lg:h-[30px] leading-[10px] lg:leading-[18px] font-medium text-[10px] lg:text-[18px] text-gray-600'
              type='button'
              onClick={deleteResult}
            >
              삭제하기
            </Button>
          </>
        ) : null}
      </div>
      <div className='flex flex-col justify-center items-start bg-white w-full h-[120px] lg:h-[150px] p-5 rounded-b'>
        <CardContent
          isDeleting={isPending}
          result={result}
        />
      </div>
    </div>
  );
};

export default ResultCard;
