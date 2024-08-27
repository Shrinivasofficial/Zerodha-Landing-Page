import React from 'react';

export const Footer = () => {
  return (
    <div className='mt-16 w-full bg-gray-100 border-t border-gray-300'>
      <div className='container mx-auto mt-8 p-4'>
        <div className='flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0 md:space-x-16'>
          
          <div className='flex flex-col items-start'>
            <img src='https://zerodha.com/static/images/logo.svg' alt='' className='h-8 object-cover' />
            <p className='text-gray-500 py-5 text-left'>© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p className='text-left'>All rights reserved.</p>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Company</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>About</p>
              <p className='text-md text-gray-500'>Products</p>
              <p className='text-md text-gray-500'>Pricing</p>
              <p className='text-md text-gray-500'>Referral Programme</p>
              <p className='text-md text-gray-500'>Careers</p>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Support</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>Contact Us</p>
              <p className='text-md text-gray-500'>Z-Connect Blog</p>
              <p className='text-md text-gray-500'>List of Charges</p>
              <p className='text-md text-gray-500'>Downloads & Resources</p>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Account</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>Open an Account</p>
              <p className='text-md text-gray-500'>Fund Transfer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
