import React from 'react';

export const Features = () => {
  return (
    <div className="mt-16 px-4 md:px-16 flex flex-col md:flex-row justify-between items-start">
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-regular mt-8 md:mt-16">Trust with Confidence</h1>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-regular">Customer-first always</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            That's why 1.5+ crore customers trust Zerodha with <br className="hidden md:inline" />
            ₹4.5+ lakh crores of equity investments and contribute to <br className="hidden md:inline" />
            15% of daily retail exchange volumes in India.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-regular">No spam or gimmicks</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            No gimmicks, spam, "gamification", or annoying push notifications.<br className="hidden md:inline" />
            High quality apps that you use at your pace, the way you like.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-regular">The Zerodha universe</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech <br className="hidden md:inline" />
            startups offer you tailored services specific to your needs.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-regular">Do better with money</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            With initiatives like Nudge and Kill Switch, we don't just facilitate <br className="hidden md:inline" />
            transactions, but actively help you do better with your money.
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img 
          src="https://zerodha.com/static/images/ecosystem.png" 
          alt="Zerodha ecosystem" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
