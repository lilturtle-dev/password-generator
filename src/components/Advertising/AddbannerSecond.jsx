import React from 'react';
import AdSense from 'react-adsense';

function AdBannerSecond({ language, isDarkMode }) {
  // Don't show ads in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center">
        <span className="text-gray-500 text-sm">Advertisement (Development Mode)</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <AdSense.Google
        client="ca-pub-5995594246081561"
        slot="9148978079"
        format="auto"
        responsive="true"
        style={{ display: 'block' }}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export default AdBannerSecond;
