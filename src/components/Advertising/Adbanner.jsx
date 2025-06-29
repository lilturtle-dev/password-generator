import React from 'react';
import SmartAdBanner from './SmartAdBanner';

function AdBanner({ language, isDarkMode }) {
  return (
    <div className="w-full mb-4">
      <SmartAdBanner
        adSlot="8766567218"
        className="w-full"
        fallbackContent={
          <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">Advertisement</span>
          </div>
        }
      />
    </div>
  );
}

export default AdBanner;
