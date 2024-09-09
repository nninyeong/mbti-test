import ResultCard from './ResultCard.jsx';
import { Link } from 'react-router-dom';

const RecentResult = ({ postedData }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h3 className='font-bold text-3xl'>MBTI 검사 결과</h3>
      <ResultCard result={postedData} />
      <div>
        <span>다른 사람들의 결과는?</span>
        <Link
          to='/results'
          className='font-bold text-point-red ml-2'
        >
          결과 보기
        </Link>
      </div>
    </div>
  );
};

export default RecentResult;
