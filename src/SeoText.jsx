import React, { useState } from "react";
import welcome from "./images/welcome-img.svg";

function SeoText(props) {
  const language = props.language;
  const [seeMore, setSeeMore] = useState(false);
  // language =='en'
  return (
    <div className="mt-6 bottom-16 mx-auto h-auto">
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 items-center justify-between m-3">
        <img src={welcome} alt="welcome" className="sepia-60 w-full" />
        <div>
          <h2 className="lg:text-[40px] text-[24px] text-[#071016] font-semibold">
            {language === "en"
              ? "Welcome to Generate Password To Me!"
              : "Ласкаво просимо до Створення пароля онлайн!"}
          </h2>
          <p className="text-[18px] text-[#071016] m-3">
            {language === "en"
              ? " We are here to provide you with a secure and reliable way to generate strong passwords."
              : "Ми тут, щоб надати вам безпечний і надійний спосіб створення надійних паролів."}
            <br /> <br />
            {language === "en"
              ? "With the ever-increasing threats of cyber attacks and data breaches,  crucial to have a robust password that can protect your sensitive information. Our online password generator offers a simple and effective solution."
              : "Оскільки загрози кібератак і витоку даних постійно зростають, дуже важливо мати надійний пароль, який зможе захистити вашу конфіденційну інформацію. Наш онлайн-генератор паролів пропонує просте та ефективне рішення."}
          </p>
        </div>
      </div>
      <p className="text-[18px] text-[#071016] m-3">
        <b>
          {language === "en"
            ? "Why choose our password generator?"
            : "Чому варто вибрати наш генератор паролів?"}
        </b>
        {language === "en"
          ? " First and foremost, we prioritize your security. Our algorithm ensures that the passwords generated are highly secure and virtually impossible to guess. We take into account various factors, such as password length, complexity, and the inclusion of numbers, symbols, and uppercase and lowercase letters."
          : "Перш за все, ми надаємо пріоритет вашій безпеці. Наш алгоритм гарантує, що згенеровані паролі є надійними, і їх практично неможливо вгадати. Ми враховуємо різні чинники, такі як довжина пароля, складність і включення цифр, символів, а також великих і малих літер."}
      </p>
      {seeMore ? (
        <p className="text-[18px] text-[#071016] m-3">
          {language === "en"
            ? " First and foremost, we prioritize your security. Our algorithm ensures that the passwords generated are highly secure and virtually impossible to guess. We take into account various factors, such as password length, complexity, and the inclusion of numbers, symbols, and uppercase and lowercase letters."
            : "Перш за все, ми надаємо пріоритет вашій безпеці. Наш алгоритм гарантує, що згенеровані паролі є надійними, і їх практично неможливо вгадати. Ми враховуємо різні чинники, такі як довжина пароля, складність і включення цифр, символів, а також великих і малих літер."}
        </p>
      ) : (
        ""
      )}
      <h2
        className=" text-[18px] text-[#96DBFF] font-semibold cursor-pointer"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore
          ? language === "en"
            ? "Show Less"
            : "Менше"
          : language === "en"
          ? "Show More"
          : "Більше"}
      </h2>
    </div>
  );
}
export default SeoText;
