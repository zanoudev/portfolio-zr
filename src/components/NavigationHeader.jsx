import React from 'react';
import ZLogo from './ZLogo';

const NavigationHeader = () => {
  const navigationItems = [
    'About', 
    'Portfolio', 
    'My Story', 
    'Interests', 
    'Contact'
  ];

  return (
    <header className="flex w-full items-center gap-24">
      {/* Logo Container */}
      <ZLogo />

      {/* Navigation Titles */}
      <nav>
        <ul className="flex items-center space-x-[104px]">
          {navigationItems.map((item, index) => (
            <li 
              key={index} 
              className="text-black font-['Young_Serif'] text-[24px] font-normal cursor-pointer hover:text-gray-600 transition-colors"
            >
              {item}
            </li>
          ))}
          {/* Blog as an external link */}
          <li>
            <a 
              href="https://notion.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-['Young_Serif'] text-[24px] font-normal hover:text-gray-600 transition-colors"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;
