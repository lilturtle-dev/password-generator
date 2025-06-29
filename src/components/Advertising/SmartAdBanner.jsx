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
  const containerRef = useRef(null);

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

  // Check if container has proper dimensions
  const checkContainerDimensions = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }
    return false;
  };

  useEffect(() => {
    // Check for ad blocker immediately
    if (detectAdBlocker()) {
      setAdState('blocked');
      setShowContainer(false);
      return;
    }

    // Wait for DOM to be ready and container to have proper dimensions
    const initializeAd = () => {
      // Check if DOM is ready
      if (document.readyState !== 'complete') {
        setTimeout(initializeAd, 100);
        return;
      }

      // Check if container has proper dimensions
      if (!checkContainerDimensions()) {
        // Retry after a short delay
        setTimeout(initializeAd, 100);
        return;
      }

      // Set timeout for ad loading
      timeoutRef.current = setTimeout(() => {
        if (adState === 'loading') {
          setAdState('failed');
          setShowContainer(false);
        }
      }, 8000); // 8 second timeout
    };

    // Start initialization
    initializeAd();

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

  const handleAdError = (error) => {
    console.error('AdSense error:', error);
    setAdState('failed');
    setShowContainer(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`smart-ad-container ${className} ${adState === 'loading' ? 'ad-loading' : ''}`}
      style={{
        ...style,
        minHeight: adState === 'loading' ? '90px' : 'auto',
        minWidth: '320px', // Ensure minimum width for AdSense
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
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
          minHeight: '90px',
          minWidth: '320px'
        }}
        data-full-width-responsive="true"
        onLoad={handleAdLoad}
        onError={handleAdError}
      />
    </div>
  );
};

export default SmartAdBanner; 