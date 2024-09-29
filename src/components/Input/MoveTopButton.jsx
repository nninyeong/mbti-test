import Button from './Button.jsx';

const MoveTopButton = ({ isPositionMove }) => {
  const handleMoveTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      className={`fixed ${isPositionMove ? 'bottom-[100px]' : 'bottom-[50px]'} right-10 rounded-2xl bg-white w-[60px] h-[60px]`}
      onClick={handleMoveTop}
    >
      맨위로
    </Button>
  );
};

export default MoveTopButton;
