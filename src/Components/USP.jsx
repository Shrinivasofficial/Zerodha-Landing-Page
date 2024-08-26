import React from 'react';

export const USP = () => {
  return (
    <div className='mt-16 px-8 md:px-16'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col mt-4 md:mr-8'>
          <h1 className='text-4xl font-regular'>Unbeatable pricing</h1>
          <h3 className='mt-6 leading-relaxed text-gray-500'>
            We pioneered the concept of discount broking and 
            price transparency in India. <br />
            Flat fees and no hidden charges.
          </h3>
          <span className='text-[#387dd1] mt-4 cursor-pointer'>See Pricing</span>
        </div>
        <div className='mt-8 md:mt-0 flex flex-wrap justify-between'>
          <div className='flex flex-col items-center'>
            <img
              className='w-full md:w-64 h-auto object-cover'
              src='https://zerodha.com/static/images/pricing-eq.svg'
              alt='Free account opening'
            />
            <p className='text-sm text-gray-500 mt-2'>Free account opening</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              className='w-full md:w-64 h-auto object-cover'
              src='https://zerodha.com/static/images/pricing-eq.svg'
              alt='Free account opening'
            />
            <p className='text-sm text-gray-500 mt-2'>Free equity delivery
and 
<br />direct mutual funds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
