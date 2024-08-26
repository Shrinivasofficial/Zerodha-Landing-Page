import React from 'react';

export const Features = () => {
  return (
    <div className="mt-16 px-16 flex justify-between items-start">
      <div className="w-1/2">
        <h1 className="text-4xl font-regular mt-16">Trust with Confidence</h1>
        <div className="mt-8">
          <h2 className="text-xl font-regular">Customer-first always</h2>
          <p className="text-sm font-regular mt-2 leading-relaxed text-gray-500">
            That's why 1.5+ crore customers trust Zerodha with <br />
            ₹4.5+ lakh crores of equity investments and contribute to <br />
            15% of daily retail exchange volumes in India.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-regular">No spam or gimmicks</h2>
          <p className="text-sm font-regular mt-2 leading-relaxed text-gray-500">
            No gimmicks, spam, "gamification", or annoying push 
            notifications.<br />
            High quality apps that you use at your pace, the way you like.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-regular">The Zerodha universe</h2>
          <p className="text-sm font-regular mt-2 leading-relaxed text-gray-500">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech <br />
            startups offer you tailored services specific to your needs.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-regular">Do better with money</h2>
          <p className="text-sm font-regular mt-2 leading-relaxed text-gray-500">
            With initiatives like Nudge and Kill Switch, we don't just facilitate <br />
            transactions, but actively help you do better with your money.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img 
          src="https://zerodha.com/static/images/ecosystem.png" 
          alt="Zerodha ecosystem" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
