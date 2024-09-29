import mbtiDescriptions from '../../data/mbtiDescriptions.js';

const CardContent = ({ isDeleting, result }) => {
  const { testResult, date } = result;

  if (isDeleting) {
    return <p>삭제중...</p>;
  } else {
    return (
      <>
        <div className='font-bold text-[15px] lg:text-xl'>{testResult}</div>
        <p className='text-[13px] lg:text-lg'>{mbtiDescriptions[testResult]}</p>
        <span className='text-[13px] lg:text-lg'>{date}</span>
      </>
    );
  }
};

export default CardContent;
