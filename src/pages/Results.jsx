import { useGetTestResults } from '../api/testResults.js';
import ResultCard from '../components/mbtiTest/ResultCard.jsx';
import { useContext } from 'react';
import { userContext } from '../context/userContextProvider.jsx';

const Results = () => {
  const { userProfile } = useContext(userContext);
  const { data: allResults, isPending, isError } = useGetTestResults();
  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className='flex flex-col justify-start items-center gap-5 my-8'>
      <h3 className='font-bold text-xl'>모든 결과 모아보기</h3>
      {allResults.map((result) => {
        if (result.isPublic || result.userId === userProfile.userId) {
          return (
            <ResultCard
              key={result.id}
              result={result}
            />
          );
        }
      })}
    </div>
  );
};

export default Results;
