import { useState } from 'react';
import guideText from '../../data/guideText.js';
import GuidePanel from './GuidePanel.jsx';
import Button from '../Input/Button.jsx';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? guideText.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === guideText.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='hidden lg:flex gap-5 mb-14'>
        {guideText.map((guide, index) => (
          <GuidePanel
            key={index}
            title={guide.title}
            detail={guide.detail}
          />
        ))}
      </div>
      <div className='lg:hidden'>
        <div className='relative w-full max-w-[400px] overflow-hidden'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%` }}
          >
            {guideText.map((guide, index) => {
              return (
                <div
                  key={index}
                  className='flex-shrink-0 flex justify-center items-center w-full'
                >
                  <GuidePanel
                    title={guide.title}
                    detail={guide.detail}
                  />
                </div>
              );
            })}
          </div>
          <Button
            onClick={handlePrev}
            className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full'
          >
            ◀
          </Button>
          <Button
            onClick={handleNext}
            className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full'
          >
            ▶
          </Button>
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
          {guideText.map((_, index) => {
            return (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
