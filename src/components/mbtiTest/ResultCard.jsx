const ResultCard = ({ result }) => {
  const { nickname, testResult, date } = result;
  return (
    <div className='flex flex-col justify-center items-center w-[400px]'>
      <div className='font-bold text-2xl text-white bg-point-red w-full h-[40px] text-center leading-[40px] rounded-t'>
        {nickname} 님
      </div>
      <div className='flex flex-col justify-center items-start bg-white w-full p-5 rounded-b'>
        <div className='font-bold text-xl'>{testResult}</div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ResultCard;
