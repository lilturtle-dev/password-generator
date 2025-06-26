import React, { useState } from "react";
import welcome from "./images/welcome-img.svg";

function SeoText(props) {
  const language = props.language;
  const [seeMore, setSeeMore] = useState(false);
  // language =='en'
  return (
    <div className="mt-6 bottom-16 mx-auto h-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        {/* Left Column - Welcome Section */}
        <div className="space-y-6 h-full flex flex-col">
          <h2 className="lg:text-[40px] text-[24px] text-[#071016] font-semibold">
            {language === "en"
              ? "Welcome to Generate Password To Me!"
              : "Ласкаво просимо до Створення пароля онлайн!"}
          </h2>
          
          <img src={welcome} alt="Welcome to secure password generation" className="sepia-60 w-full hover:sepia-0 transition-all duration-300 rounded-lg" />
          
          <div className="space-y-4 flex-grow">
            <p className="text-[18px] text-[#071016] leading-relaxed"
               dangerouslySetInnerHTML={{
                 __html: language === "en"
                   ? "We are here to provide you with a <strong>secure</strong> and <strong>reliable</strong> way to generate <strong>strong passwords</strong>."
                   : "Ми тут, щоб надати вам <strong>безпечний</strong> і <strong>надійний</strong> спосіб створення <strong>надійних паролів</strong>."
               }}
            />
            
            <p className="text-[18px] text-[#071016] leading-relaxed"
               dangerouslySetInnerHTML={{
                 __html: language === "en"
                   ? "With the ever-increasing threats of <strong>cyber attacks</strong> and <strong>data breaches</strong>, it's crucial to have a <strong>robust password</strong> that can protect your <strong>sensitive information</strong>. Our <strong>online password generator</strong> offers a simple and effective solution."
                   : "Оскільки загрози <strong>кібератак</strong> і <strong>витоку даних</strong> постійно зростають, дуже важливо мати <strong>надійний пароль</strong>, який зможе захистити вашу <strong>конфіденційну інформацію</strong>. Наш <strong>онлайн-генератор паролів</strong> пропонує просте та ефективне рішення."
               }}
            />
          </div>
        </div>

        {/* Right Column - Why Choose Us Section */}
        <div className="space-y-6 h-full flex flex-col">
          <h3 className="lg:text-[32px] text-[20px] text-[#071016] font-semibold">
            {language === "en"
              ? "Why choose our password generator?"
              : "Чому варто вибрати наш генератор паролів?"}
          </h3>
          
          <div className="space-y-4 flex-grow">
            <p className="text-[18px] text-[#071016] leading-relaxed"
               dangerouslySetInnerHTML={{
                 __html: language === "en"
                   ? "First and foremost, we prioritize your <strong>security</strong>. Our <strong>algorithm</strong> ensures that the passwords generated are highly <strong>secure</strong> and virtually impossible to guess. We take into account various factors, such as <strong>password length</strong>, <strong>complexity</strong>, and the inclusion of <strong>numbers</strong>, <strong>symbols</strong>, and <strong>uppercase and lowercase letters</strong>."
                   : "Перш за все, ми надаємо пріоритет вашій <strong>безпеці</strong>. Наш <strong>алгоритм</strong> гарантує, що згенеровані паролі є надійними, і їх практично неможливо вгадати. Ми враховуємо різні чинники, такі як <strong>довжина пароля</strong>, <strong>складність</strong> і включення <strong>цифр</strong>, <strong>символів</strong>, а також <strong>великих і малих літер</strong>."
               }}
            />
            
            <p className="text-[18px] text-[#071016] leading-relaxed"
               dangerouslySetInnerHTML={{
                 __html: language === "en"
                   ? "Our <strong>password generator tool</strong> creates <strong>unique passwords</strong> that are <strong>cryptographically secure</strong>. Each generated password is <strong>random</strong> and follows <strong>best security practices</strong>. Whether you need a <strong>simple password</strong> or a <strong>complex password</strong>, our generator adapts to your needs."
                   : "Наш <strong>інструмент генерації паролів</strong> створює <strong>унікальні паролі</strong>, які є <strong>криптографічно безпечними</strong>. Кожен згенерований пароль є <strong>випадковим</strong> і відповідає <strong>найкращим практикам безпеки</strong>. Чи потрібен вам <strong>простий пароль</strong> або <strong>складний пароль</strong>, наш генератор адаптується до ваших потреб."
               }}
            />
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#2A4E63] mb-2">
              {language === "en" ? "Key Features:" : "Ключові особливості:"}
            </h4>
            <ul className="text-[16px] text-[#071016] space-y-1">
              <li>• {language === "en" ? "Advanced encryption algorithms" : "Передові алгоритми шифрування"}</li>
              <li>• {language === "en" ? "Customizable password length" : "Налаштовувана довжина пароля"}</li>
              <li>• {language === "en" ? "Multiple character types" : "Різні типи символів"}</li>
              <li>• {language === "en" ? "Instant generation" : "Миттєва генерація"}</li>
              <li>• {language === "en" ? "No data storage" : "Без зберігання даних"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeoText;
