import { useEffect, useState } from 'react';
import { fetchProfile } from '../api/auth.js';
import Button from '../components/Input/Button.jsx';

const Profile = () => {
  const [userProfile, setUserProfile] = useState();
  const accessToken = localStorage.getItem('accessToken');

  // TODO: 지난번에 한 render as you fetch 적용해보기
  useEffect(() => {
    (async () => {
      const { success, ...profileData } = await fetchProfile(accessToken);

      if (success) {
        setUserProfile(profileData);
      } else {
        // TODO: 실패시 조치 추가
        alert('프로필 불러오기에 실패했습니다.');
      }
    })();
  }, []);
  return (
    <div className='flex flex-col gap-5 m-10'>
      <h2 className='font-bold text-2xl'>
        안녕하세요 <span>{userProfile?.nickname}</span>님!
      </h2>
      {/*TODO: 프로필 변경 기능 추가*/}
      <Button
        className='rounded w-full bg-primary-bg-red text-point-red font-bold'
        type='button'
        onClick={() => {
          alert('준비중! 조금만 기다려주세요');
        }}
      >
        프로필 변경하기
      </Button>
    </div>
  );
};

export default Profile;
