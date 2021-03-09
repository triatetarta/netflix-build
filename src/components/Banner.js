import React from 'react';
import './Banner.scss';

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button type='button' className='banner__button'>
            Play
          </button>
          <button type='button' className='banner__button'>
            My List
          </button>
        </div>
        <h1 className='banner__description'>
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio dolore cumque vitae doloribus necessitatibus quia quod! Nesciun tempore itaque minima, assumenda dolorum beatae numquam sed dolor eligendi! Recusandae, quibusdam!`,
            150
          )}
        </h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  );
};

export default Banner;
