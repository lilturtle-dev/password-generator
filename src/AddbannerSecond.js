import React from 'react';

function AdBannerSecond({ language, isDarkMode }) {
  return (
    <div className={`text-[#96DBFF] w-full ${isDarkMode ? 'bg-[#444444]' : 'bg-[#E5F6FF]'} min-h-[300px] rounded-24 text-[48px] font-semibold flex items-center justify-center lg:m-0  lg:mb-5 text-center lg:text-center`}>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins class="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script> */}
      {language === 'en' ? 'Google Ads Goes Here' : 'Тут працює Google Ads'}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5995594246081561"
        crossorigin="anonymous"></script>
      {/* <!-- Horizontal 1 --> */}
      <ins class="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-5995594246081561"
        data-ad-slot="8766567218"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </div>
  );
}

export default AdBannerSecond;
