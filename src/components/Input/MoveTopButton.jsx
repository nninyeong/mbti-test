import Button from './Button.jsx';

const MoveTopButton = () => {
  const handleMoveTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button
      className='fixed bottom-10 right-10'
      onClick={handleMoveTop}
    >
      맨위로
    </Button>
  );
};

export default MoveTopButton;
