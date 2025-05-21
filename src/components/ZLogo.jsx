import React from 'react';

const ZLogo = () => {
  return (
    <div className="relative w-[107px] h-[98px] transform perspective-500 rotate-y-[10deg]">
      {/* Dark Blue Background Square */}
      <div className="absolute top-0 left-0 w-full h-full bg-dark-blue flex items-center justify-center">
        {/* Z Letter */}
        <span className="text-white font-['Young_Serif'] text-[48px] font-normal">
          Z
        </span>
      </div>
      
      {/* Small Red Square */}
      <div className="absolute bottom-0 right-0 w-[24px] h-[24px] bg-accent-red"></div>
    </div>
  );
};

export default ZLogo;