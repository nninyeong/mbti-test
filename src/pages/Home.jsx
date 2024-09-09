import { Link } from 'react-router-dom';
import GuidePanel from '../components/home/GuidePanel.jsx';

const Home = () => {
  return (
    <div className='self-center'>
      <h1 className='font-bold text-3xl w-full text-center mb-5'>무료 성격 테스트</h1>
      <p className='font-light text-xl w-full text-center mb-8'>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>
      <div className='flex gap-5 mb-14'>
        <GuidePanel
          title='성격 유형 검사'
          detail='자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.'
        />
        <GuidePanel
          title='성격 유형 이해'
          detail='다른 사람들이 어떻게 행동하는지 이해하는 것에 도움을 줄 수 있습니다.'
        />
        <GuidePanel
          title='팀 평가'
          detail='팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.'
        />
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center rounded w-[250px] h-[50px] bg-point-red cursor-pointer group hover:bg-white'>
          <Link
            to='/test'
            className='text-white text-2xl group-hover:text-point-red'
          >
            MBTI 검사하러 가기!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
