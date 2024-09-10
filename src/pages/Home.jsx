import { Link } from 'react-router-dom';
import GuidePanel from '../components/home/GuidePanel.jsx';
import guideText from '../data/guideText.js';

const Home = () => {
  return (
    <div className='self-center'>
      <h1 className='font-bold text-3xl w-full text-center mb-5'>무료 성격 테스트</h1>
      <p className='font-light text-xl w-full text-center mb-8'>
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>
      <div className='flex gap-5 mb-14'>
        <GuidePanel
          title={guideText[0].title}
          detail={guideText[0].detail}
        />
        <GuidePanel
          title={guideText[1].title}
          detail={guideText[1].detail}
        />
        <GuidePanel
          title={guideText[2].title}
          detail={guideText[2].detail}
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
