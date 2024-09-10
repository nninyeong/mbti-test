const GuidePanel = ({ title, detail }) => {
  return (
    <div className='flex flex-col justify-center items-start gap-5 p-5 bg-white rounded-md shadow-lg shadow-gray-400/50 w-3/4 my-1 lg:w-[320px] lg:h-full'>
      <h2 className='font-medium text-xl'>{title}</h2>
      <p className='font-light'>{detail}</p>
    </div>
  );
};

export default GuidePanel;
