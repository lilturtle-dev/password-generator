import React from "react";

function SeoList(props) {
  const language = props.language;
  return (
    <div className="mt-6 bottom-16 mx-auto h-auto max-w-6xl px-4">
      <div className="items-center justify-between max-w-6xl">
        <h2 className="lg:text-[40px] text-[24px] text-[#071016] font-semibold mb-8">
          {language === "en"
            ? "Ultimate Guide to Creating Strong and Secure Passwords: Tips and Tools for Online Safety"
            : "Найкращий Посібник з Створення Сильних та Безпечних Паролів: Поради та Інструменти для Онлайн Безпеки"}
        </h2>
        
        <div className="text-[18px] text-[#071016] leading-relaxed mb-8">
          <p className="mb-6" dangerouslySetInnerHTML={{
            __html: language === "en"
              ? "In today's digital world, <strong>password security</strong> is more important than ever. With cyber threats constantly evolving, having <strong>strong passwords</strong> is your first line of defense against unauthorized access to your personal and professional accounts."
              : "У сучасному цифровому світі <strong>безпека паролів</strong> важливіша, ніж будь-коли. Оскільки кіберзагрози постійно еволюціонують, наявність <strong>міцних паролів</strong> є вашою першою лінією захисту від несанкціонованого доступу до ваших особистих та професійних облікових записів."
          }} />
          
          <p className="mb-6" dangerouslySetInnerHTML={{
            __html: language === "en"
              ? "This comprehensive guide will walk you through everything you need to know about <strong>password generation</strong>, <strong>security best practices</strong>, and the tools available to protect your <strong>digital identity</strong>."
              : "Цей комплексний посібник проведе вас через все, що вам потрібно знати про <strong>генерацію паролів</strong>, <strong>найкращі практики безпеки</strong> та інструменти, доступні для захисту вашої <strong>цифрової ідентичності</strong>."
          }} />
        </div>

        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Column 1 - Basic Password Security */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#2A4E63] mb-4">
              {language === "en" ? "Basic Password Security" : "Базова безпека паролів"}
            </h3>
            <div className="space-y-4">
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Password Generator</strong>: Use a reliable password generator to create strong and complex passwords that are virtually impossible to crack. These tools use advanced algorithms to ensure maximum security."
                  : "<strong>Генератор паролів</strong>: Використовуйте надійний генератор паролів для створення міцних та складних паролів, які практично неможливо зламати. Ці інструменти використовують передові алгоритми для забезпечення максимальної безпеки."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Online Password Generator</strong>: Look for online tools that generate secure passwords instantly. These web-based generators are convenient and accessible from any device with internet access."
                  : "<strong>Генератор паролів онлайн</strong>: Шукайте онлайн-інструменти, які миттєво генерують безпечні паролі. Ці веб-генератори зручні та доступні з будь-якого пристрою з доступом до інтернету."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Strong Password Generator</strong>: Always choose a strong password generator to create reliable passwords. Look for generators that use cryptographically secure random number generators."
                  : "<strong>Генератор міцних паролів</strong>: Завжди обирайте міцний генератор паролів для створення надійних паролів. Шукайте генератори, які використовують криптографічно безпечні генератори випадкових чисел."
              }} />
            </div>
          </div>

          {/* Column 2 - Advanced Security */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#2A4E63] mb-4">
              {language === "en" ? "Advanced Security" : "Розширена безпека"}
            </h3>
            <div className="space-y-4">
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Secure Password Generator</strong>: A secure password generator creates passwords that are resistant to brute force attacks and dictionary-based hacking attempts. These generators use sophisticated algorithms."
                  : "<strong>Безпечний генератор паролів</strong>: Безпечний генератор паролів створює паролі, які стійкі до атак перебором та спроб зламу на основі словників. Ці генератори використовують складні алгоритми."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Password Security</strong>: Password security involves more than just creating strong passwords. It includes regular updates, unique passwords for each account, and proper storage methods."
                  : "<strong>Безпека паролів</strong>: Безпека паролів включає більше, ніж просто створення міцних паролів. Це включає регулярні оновлення, унікальні паролі для кожного акаунту та правильні методи зберігання."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Digital Security</strong>: Your digital security depends on the strength of your passwords. Use password generators as part of a comprehensive security strategy."
                  : "<strong>Цифрова безпека</strong>: Ваша цифрова безпека залежить від міцності ваших паролів. Використовуйте генератори паролів як частину комплексної стратегії безпеки."
              }} />
            </div>
          </div>

          {/* Column 3 - Best Practices */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#2A4E63] mb-4">
              {language === "en" ? "Best Practices" : "Найкращі практики"}
            </h3>
            <div className="space-y-4">
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Create Secure Password</strong>: Learn to create secure passwords that effectively protect your accounts. Consider using passphrases for better memorability while maintaining security."
                  : "<strong>Створити безпечний пароль</strong>: Навчіться створювати безпечні паролі, які ефективно захищають ваші акаунти. Розгляньте використання парольних фраз для кращої запам'ятовуваності при збереженні безпеки."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Safe Passwords</strong>: Use passwords that provide security and are difficult for others to guess. Avoid using personal information like names, birthdays, or common words."
                  : "<strong>Безпечні паролі</strong>: Використовуйте паролі, які забезпечують безпеку та є важкими для вгадування іншими. Уникайте використання особистої інформації, такої як імена, дні народження або звичайні слова."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Generate Secure</strong>: Practice password generation that guarantees security for your accounts. Regularly update your passwords and use different passwords for each account."
                  : "<strong>Генерувати безпечно</strong>: Практикуйте генерацію паролів, яка гарантує безпеку вашим акаунтам. Регулярно оновлюйте паролі та використовуйте різні паролі для кожного акаунту."
              }} />
            </div>
          </div>
        </div>

        {/* Additional 2-column section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          {/* Additional Security Tips */}
          <div className="bg-blue-50 p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-xl font-semibold text-[#2A4E63] mb-4">
              {language === "en" ? "Additional Security Tips" : "Додаткові поради щодо безпеки"}
            </h3>
            <div className="space-y-4 flex-grow">
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Simple Password Generator</strong>: Some password generators offer simple passwords that are easy to remember while still being secure. These are perfect for accounts where you need quick access."
                  : "<strong>Простий генератор паролів</strong>: Деякі генератори паролів пропонують прості паролі, які легко запам'ятати, але при цьому безпечні. Вони ідеальні для акаунтів, де вам потрібен швидкий доступ."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Complex Password Generator</strong>: Use password generators that create complex passwords to safeguard your accounts. These are essential for banking, email, and other critical accounts."
                  : "<strong>Генератор складних паролів</strong>: Використовуйте генератори паролів, які створюють складні паролі для захисту ваших акаунтів. Вони необхідні для банківських рахунків, електронної пошти та інших критичних акаунтів."
              }} />
            </div>
          </div>
          
          {/* Advanced Security Measures */}
          <div className="bg-green-50 p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-xl font-semibold text-[#2A4E63] mb-4">
              {language === "en" ? "Advanced Security Measures" : "Розширені заходи безпеки"}
            </h3>
            <div className="space-y-4 flex-grow">
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Password Manager Integration</strong>: Consider using a password manager alongside your password generator. This combination provides the ultimate security for your digital accounts."
                  : "<strong>Інтеграція з менеджером паролів</strong>: Розгляньте можливість використання менеджера паролів разом з вашим генератором паролів. Ця комбінація забезпечує максимальну безпеку для ваших цифрових акаунтів."
              }} />
              
              <div dangerouslySetInnerHTML={{
                __html: language === "en"
                  ? "<strong>Two-Factor Authentication</strong>: Always enable two-factor authentication when available. This adds an extra layer of security beyond just having a strong password."
                  : "<strong>Двофакторна аутентифікація</strong>: Завжди увімкніть двофакторну аутентифікацію, коли це можливо. Це додає додатковий рівень безпеки окрім наявності міцного пароля."
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoList;
