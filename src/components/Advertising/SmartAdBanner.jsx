import React, { useState, useEffect, useRef } from 'react';
import AdSense from 'react-adsense';

const SmartAdBanner = ({ 
  adSlot = '8766567218',
  className = '',
  style = {},
  fallbackContent = null
}) => {
  const [adState, setAdState] = useState('loading'); // loading, loaded, failed, blocked
  const [showContainer, setShowContainer] = useState(true);
  const adRef = useRef(null);
  const timeoutRef = useRef(null);

  // Detect ad blocker
  const detectAdBlocker = () => {
    try {
      // Check if adsbygoogle is available
      if (typeof window !== 'undefined' && !window.adsbygoogle) {
        return true;
      }
      
      // Check if ad elements are hidden
      const testAd = document.createElement('div');
      testAd.className = 'adsbygoogle';
      testAd.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px;';
      document.body.appendChild(testAd);
      
      const isBlocked = testAd.offsetHeight === 0;
      document.body.removeChild(testAd);
      
      return isBlocked;
    } catch (error) {
      return true;
    }
  };

  useEffect(() => {
    // Check for ad blocker immediately
    if (detectAdBlocker()) {
      setAdState('blocked');
      setShowContainer(false);
      return;
    }

    // Set timeout for ad loading
    timeoutRef.current = setTimeout(() => {
      if (adState === 'loading') {
        setAdState('failed');
        setShowContainer(false);
      }
    }, 8000); // 8 second timeout

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [adState]);

  // Don't show ads in development
  if (process.env.NODE_ENV === 'development') {
    return fallbackContent || (
      <div className={`ad-placeholder ${className}`} style={style}>
        <div className="text-center text-gray-500 text-sm py-4">
          Advertisement (Development Mode)
        </div>
      </div>
    );
  }

  // Don't render anything if ad shouldn't be shown
  if (!showContainer || adState === 'blocked' || adState === 'failed') {
    return fallbackContent || null;
  }

  const handleAdLoad = () => {
    setAdState('loaded');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleAdError = () => {
    setAdState('failed');
    setShowContainer(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div 
      ref={adRef}
      className={`smart-ad-container ${className} ${adState === 'loading' ? 'ad-loading' : ''}`}
      style={{
        ...style,
        minHeight: adState === 'loading' ? '90px' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {adState === 'loading' && (
        <div className="text-center text-gray-400 text-sm">
          Loading advertisement...
        </div>
      )}
      
      <AdSense.Google
        client="ca-pub-5995594246081561"
        slot={adSlot}
        format="auto"
        responsive="true"
        style={{ 
          display: 'block',
          minHeight: '90px'
        }}
        data-full-width-responsive="true"
        onLoad={handleAdLoad}
        onError={handleAdError}
      />
    </div>
  );
};

export default SmartAdBanner; 