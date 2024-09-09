import Question from '../components/mbtiTest/Question.jsx';
import { questions } from '../data/questions.js';
import { useContext, useState } from 'react';
import Button from '../components/Input/Button.jsx';
import { calculateMBTI } from '../utils/mbtiCalculator.js';
import { usePostTestResults } from '../api/testResults.js';
import RecentResult from '../components/mbtiTest/RecentResult.jsx';
import { userContext } from '../context/userContextProvider.jsx';

const Test = () => {
  const { userProfile } = useContext(userContext);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleSelection = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);
  };

  const { mutateTestResult, isSuccess, postedData, isPending } = usePostTestResults();
  if (isPending) {
    return <p>MBTI 계산중...</p>;
  }

  if (isSuccess) {
    return <RecentResult postedData={postedData} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answers.some((answer) => answer === null)) {
      alert('모든 질문에 답변해주세요');
      return;
    }

    const result = calculateMBTI(answers);
    const date = new Date();
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    mutateTestResult({
      userId: userProfile.userId,
      nickname: userProfile.nickname,
      testResult: result,
      date: formattedDate,
      isPublic: true,
    });
  };

  return (
    <div className='m-10'>
      <h1 className='font-bold text-2xl'>MBTI 테스트</h1>
      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              question={question}
              answers={answers}
              onChange={handleSelection}
            />
          );
        })}
        <Button type='submit'>제출하기</Button>
      </form>
    </div>
  );
};

export default Test;
