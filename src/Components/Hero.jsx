import React from 'react';

export const Hero = () => {
  return (
    <div className='mt-16 pt-16 flex flex-col items-center justify-center text-center'>
      <img
        className='h-80 w-full max-w-3xl object-cover'
        src='https://zerodha.com/static/images/landing.png'
        alt='Hero Image'
      />
      <h1 className='text-4xl sm:text-5xl md:text-6xl mt-8 text-gray-500'>
        Invest in everything
      </h1>
      <p className='text-lg sm:text-xl mt-6 text-gray-800'>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button className='mt-6 px-6 py-3 bg-[#387dd1] text-white rounded-lg'>
        Sign Up for free
      </button>
    </div>
  );
};
