import React, { useState } from "react";

function SeoList(props) {
  const language = props.language;
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="mt-6 bottom-16 mx-auto h-auto">
      <div className="items-center justify-between">
        <h2 className="lg:text-[40px] text-[24px]  text-[#071016] font-semibold">
          {language === "en"
            ? "Ultimate Guide to Creating Strong and Secure Passwords: Tips and Tools for Online Safety"
            : "Найкращий Посібник з Створення Сильних та Безпечних Паролів: Поради та Інструменти для Онлайн Безпеки"}
        </h2>
        <div className="text-[18px] text-[#071016] m-3">
          {language === "en" ? (
            <>
              <ol type="1" className="px-4">
                <li>
                  <strong>Password Generator:</strong> Use a reliable password
                  generator to create strong and complex passwords.
                </li>
                <li>
                  <strong>Online Password Generator:</strong> Look for online
                  tools to generate secure passwords.
                </li>
                <li>
                  <strong>Free Password Generator:</strong> Explore free
                  password generation tools available on the internet.
                </li>
                <li>
                  <strong>Secure Passwords:</strong> Always use secure and
                  complex passwords for your online accounts.
                </li>
                <li>
                  <strong>Password Online:</strong> Use online tools to manage
                  and generate passwords securely.
                </li>
                {seeMore && (
                  <>
                    <li>
                      <strong>Generate Secure Password:</strong> Generate
                      passwords that are both secure and unique for each of your
                      accounts.
                    </li>
                    <li>
                      <strong>Simple Password Generator:</strong> Some password
                      generators offer simple passwords that are easy to
                      remember while still being secure.
                    </li>
                    <li>
                      <strong>Free Password:</strong> Search for and use free
                      password generation tools.
                    </li>
                    <li>
                      <strong>Password Tool:</strong> Use password tools to
                      enhance the security of your online accounts.
                    </li>
                    <li>
                      <strong>Create Password:</strong> Learn how to create
                      strong passwords that are hard to guess.
                    </li>
                    <li>
                      <strong>Password Generator Tool:</strong> Use specialized
                      password generation tools to ensure the strength of your
                      password.
                    </li>
                    <li>
                      <strong>Free Online Password Generator:</strong> Look for
                      free online password generators to enhance security.
                    </li>
                    <li>
                      <strong>Strong Password Generator:</strong> Always choose
                      a strong password generator to create reliable passwords.
                    </li>
                    <li>
                      <strong>Good Password Generator:</strong> Seek a password
                      generator that provides quality password options for your
                      accounts.
                    </li>
                    <li>
                      <strong>Create Secure Password:</strong> Learn to create
                      secure passwords that effectively protect your accounts.
                    </li>
                    <li>
                      <strong>Safe Passwords:</strong> Use passwords that
                      provide security and are difficult for others to guess.
                    </li>
                    <li>
                      <strong>Password Generator App:</strong> Consider using
                      dedicated password generator apps to create strong
                      passwords.
                    </li>
                    <li>
                      <strong>Password Generate Online:</strong> Use online
                      tools to generate passwords for your accounts.
                    </li>
                    <li>
                      <strong>Passwords:</strong> Always practice safe online
                      habits and protect your accounts with strong passwords.
                    </li>
                    <li>
                      <strong>Complex Password Generator:</strong> Use password
                      generators that create complex passwords to safeguard your
                      accounts.
                    </li>
                    <li>
                      <strong>Free Password Generator App:</strong> Consider
                      using free apps for password generation for your security.
                    </li>
                    <li>
                      <strong>Secure Password App:</strong> Use password apps to
                      store and manage your login credentials.
                    </li>
                    <li>
                      <strong>Generate Secure:</strong> Practice password
                      generation that guarantees security for your accounts.
                    </li>
                    <li>
                      <strong>Safe Password Generator:</strong> Utilize
                      dedicated tools to generate secure passwords.
                    </li>
                    <li>
                      <strong>Generate Free Password:</strong> Learn to create
                      strong passwords for free.
                    </li>
                    <li>
                      <strong>
                        Password Generator Password Generator Password
                        Generator:
                      </strong>
                      Use password generation tools that provide triple
                      security.
                    </li>
                    <li>
                      <strong>Password Application:</strong> Use applications
                      that generate and store your passwords securely.
                    </li>
                    <li>
                      <strong>Password Generator Tool Free:</strong> Utilize
                      free password generator tools to enhance your security.
                    </li>
                    <li>
                      <strong>Password Safe App:</strong> Use password safe apps
                      for secure storage and management of your login data.
                    </li>
                    <li>
                      <strong>Easy Password Generator Online:</strong> Find
                      online tools that make it easy to generate secure
                      passwords.
                    </li>
                    <li>
                      <strong>Online Password Generator Tool:</strong> Use
                      online password generator tools for enhanced security.
                    </li>
                  </>
                )}
              </ol>
              <p>
                Welcome to our platform, where we are dedicated to providing you
                with secure solutions for your digital needs. Our mission is to
                assist you in navigating the complex digital landscape with ease
                and confidence.
              </p>

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
            </>
          ) : (
            <>
            <ol type="1" className="px-4">
              <li>
                <strong>Генератор паролів:</strong> Використовуйте надійний
                генератор паролів для створення сильних та складних паролів.
              </li>
              <li>
                <strong>Генератор паролів онлайн:</strong> Шукайте
                онлайн-інструменти для генерації безпечних паролів.
              </li>
              <li>
                <strong>Генератор паролів безкоштовно:</strong> Досліджуйте
                безкоштовні інструменти для генерації паролів, доступні в
                Інтернеті.
              </li>
              <li>
                <strong>Безпечні паролі:</strong> Завжди використовуйте
                безпечні, складні паролі для своїх онлайн-акаунтів.
              </li>
              <li>
                <strong>Пароль онлайн:</strong> Використовуйте
                онлайн-інструменти для управління та генерації паролів безпечно.
              </li>
              {seeMore && (
                <>
              <li>
                <strong>Генерувати безпечний пароль:</strong> Генеруйте паролі,
                які є і безпечними, і унікальними для кожного вашого акаунту.
              </li>
              <li>
                <strong>Простий генератор паролів:</strong> Деякі генератори
                паролів пропонують прості паролі, які легко запам'ятати, але при
                цьому безпечні.
              </li>
              <li>
                <strong>Безкоштовний пароль:</strong> Шукайте та використовуйте
                безкоштовні інструменти генерації паролів.
              </li>
              <li>
                <strong>Інструмент паролю:</strong> Використовуйте інструменти
                для паролів для підвищення безпеки ваших онлайн-акаунтів.
              </li>
              <li>
                <strong>Створити пароль:</strong> Дізнайтеся, як створювати
                міцні паролі, які важко вгадати.
              </li>
              <li>
                <strong>Генератор паролів інструмент:</strong> Використовуйте
                спеціалізовані інструменти генерації паролів для забезпечення
                міцності вашого паролю.
              </li>
              <li>
                <strong>Генератор паролів онлайн безкоштовно:</strong> Пошук
                безкоштовних онлайн-генераторів паролів для підвищення безпеки.
              </li>
              <li>
                <strong>Міцний генератор паролів:</strong> Всегда обирайте
                міцний генератор паролів для створення надійних паролів.
              </li>
              <li>
                <strong>Добрий генератор паролів:</strong> Шукайте генератор
                паролів, який надає якісні варіанти паролів для ваших акаунтів.
              </li>
              <li>
                <strong>Створити безпечний пароль:</strong> Навчіться створювати
                безпечні паролі, які надійно захищають ваші аккаунти.
              </li>
              <li>
                <strong>Безпечні паролі:</strong> Використовуйте паролі, які
                забезпечують безпеку та є важкими для вгадування іншими.
              </li>
              <li>
                <strong>Пароль Генератор App:</strong> Розгляньте використання
                спеціальних додатків для генерації паролів для створення
                надійних паролів.
              </li>
              <li>
                <strong>Пароль Генерувати Онлайн:</strong> Використовуйте
                онлайн-інструменти для генерації паролів для вашіх аккаунтів.
              </li>
              <li>
                <strong>Паролі:</strong> Завжди практикуйте безпечні звички в
                мережі та захищайте свої аккаунти міцними паролями.
              </li>
              <li>
                <strong>Генератори паролів складні:</strong> Використовуйте
                генератори паролів, які створюють складні паролі для захисту
                ваших аккаунтів.
              </li>
              <li>
                <strong>Безкоштовний пароль Генератор App:</strong> Розгляньте
                використання безкоштовних додатків для генерації паролів для
                вашої безпеки.
              </li>
              <li>
                <strong>Пароль Безпечний App:</strong> Використовуйте додатки
                для паролів для збереження та керування своїми вхідними даними.
              </li>
              <li>
                <strong>Генерувати безпечний:</strong> Практикуйте генерацію
                паролів, які гарантують безпеку вашим аккаунтам.
              </li>
              <li>
                <strong>Пароль Генерувати Засіб:</strong> Використовуйте
                спеціалізовані засоби для генерації паролів для забезпечення
                безпеки.
              </li>
              </>
              )}
              </ol>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SeoList;
