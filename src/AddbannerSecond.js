import React from 'react';

function AdBannerSecond() {
  return (
    <div className="w-full">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5995594246081561"
        crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-5995594246081561"
        data-ad-slot="8766567218"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  );
}

export default AdBannerSecond;
