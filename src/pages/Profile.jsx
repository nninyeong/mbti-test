import { useContext, useState } from 'react';
import { editProfile } from '../api/auth.js';
import Button from '../components/Input/Button.jsx';
import { userContext } from '../context/userContextProvider.jsx';

const Profile = () => {
  const accessToken = localStorage.getItem('accessToken');
  const { userProfile, setUserProfile } = useContext(userContext);

  const [editMode, setEditMode] = useState(false);
  const [newNickname, setNewNickname] = useState('');

  const handleNicknameInput = (e) => {
    setNewNickname(e.target.value);
  };

  const handleUpdateNickname = async () => {
    const { nickname, success, message } = await editProfile(accessToken, newNickname);
    if (success) {
      alert(message);
      setUserProfile({ ...userProfile, nickname });
      setEditMode(false);
    }
  };

  const profileControllUI = () => {
    if (editMode) {
      return (
        <>
          <input
            type='text'
            value={newNickname}
            onChange={handleNicknameInput}
          />
          <Button
            type='button'
            onClick={handleUpdateNickname}
          >
            수정하기
          </Button>
        </>
      );
    } else {
      return (
        <Button
          className='rounded w-full bg-primary-bg-red text-point-red font-bold'
          type='button'
          onClick={() => {
            setEditMode(true);
          }}
        >
          프로필 변경하기
        </Button>
      );
    }
  };

  return (
    <div className='flex flex-col gap-5 m-10'>
      <h2 className='font-bold text-2xl'>
        안녕하세요 <span>{userProfile?.nickname}</span>님!
      </h2>
      {profileControllUI()}
    </div>
  );
};

export default Profile;
