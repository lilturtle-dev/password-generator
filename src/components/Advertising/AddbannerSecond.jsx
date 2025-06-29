import React from 'react';
import SmartAdBanner from './SmartAdBanner';

function AdBannerSecond({ language, isDarkMode }) {
  return (
    <div className="w-full mb-4" style={{ minWidth: '320px' }}>
      <SmartAdBanner
        adSlot="8766567218"
        className="w-full"
        style={{ minWidth: '320px', minHeight: '90px' }}
        fallbackContent={
          <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center" style={{ minWidth: '320px' }}>
            <span className="text-gray-500 text-sm">Advertisement</span>
          </div>
        }
      />
    </div>
  );
}

export default AdBannerSecond;
