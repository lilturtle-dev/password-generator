import React, { useState } from 'react';

function HowToUse(props) {
    const language = props.language;
    const [seeMore, setSeeMore] = useState(false);
    return (
        <div className='mt-6 bottom-16 mx-auto h-auto max-w-6xl px-4'>
            <div className='items-center justify-between max-w-6xl'>
                <h2 className='lg:text-[40px] text-[24px] text-[#071016] font-semibold mb-8'>{language === 'en' ? 'How to Use' : 'Як використовувати:'}</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    {/* Left Column - Basic Steps */}
                    <div className="space-y-6 h-full flex flex-col">
                        <h3 className="text-xl font-semibold text-[#2A4E63]">
                            {language === 'en' ? 'Simple Steps' : 'Прості кроки'}
                        </h3>
                        
                        <div className='text-[18px] text-[#071016] leading-relaxed flex-grow'>
                            <p className='font-bold py-4' dangerouslySetInnerHTML={{
                                __html: language === 'en'
                                    ? "Using the <strong>password generator</strong> is simple. Just follow these steps:"
                                    : "Використання <strong>генератора паролів</strong> просте. Просто слідуйте цим крокам:"
                            }} />
                            <ol className='space-y-3 pl-4'>
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Click on the \"<strong>Generate Password</strong>\" button."
                                        : "Натисніть кнопку \"<strong>Згенерувати пароль</strong>\"."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Customize your password by selecting the desired <strong>length</strong> and including <strong>special characters</strong>, <strong>numbers</strong>, and <strong>uppercase letters</strong>."
                                        : "Налаштуйте свій пароль, вибравши бажану <strong>довжину</strong> та включивши <strong>спеціальні символи</strong>, <strong>цифри</strong> та <strong>великі літери</strong>."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Click \"<strong>Generate</strong>,\" and your <strong>secure password</strong> will be generated instantly."
                                        : "Натисніть \"<strong>Згенерувати</strong>,\" і ваш <strong>безпечний пароль</strong> буде створений миттєво."
                                }} />
                            </ol>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#2A4E63] mb-2">
                                {language === 'en' ? 'What You Get:' : 'Що ви отримуєте:'}
                            </h4>
                            <ul className="text-[16px] text-[#071016] space-y-1">
                                <li>• {language === 'en' ? "Strong, unique passwords" : "Міцні, унікальні паролі"}</li>
                                <li>• {language === 'en' ? "Customizable length" : "Налаштовувана довжина"}</li>
                                <li>• {language === 'en' ? "Multiple character types" : "Різні типи символів"}</li>
                                <li>• {language === 'en' ? "Instant generation" : "Миттєва генерація"}</li>
                                <li>• {language === 'en' ? "Copy to clipboard" : "Копіювання в буфер обміну"}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Security Tips */}
                    <div className="space-y-6 h-full flex flex-col">
                        <h3 className="text-xl font-semibold text-[#2A4E63]">
                            {language === 'en' ? 'Security Tips' : 'Поради щодо безпеки'}
                        </h3>
                        
                        <div className='text-[18px] text-[#071016] leading-relaxed flex-grow'>
                            <p className='font-bold py-4' dangerouslySetInnerHTML={{
                                __html: language === 'en'
                                    ? "<strong>Security Tips</strong>:"
                                    : "<strong>Поради щодо безпеки</strong>:"
                            }} />
                            <ul className='space-y-3 pl-4'>
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Never use the same <strong>password</strong> for multiple <strong>accounts</strong>."
                                        : "Ніколи не використовуйте один і той же <strong>пароль</strong> для кількох <strong>акаунтів</strong>."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Change your <strong>passwords</strong> regularly."
                                        : "Регулярно змінюйте свої <strong>паролі</strong>."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Store your <strong>passwords</strong> in a <strong>secure</strong> and <strong>encrypted password manager</strong>."
                                        : "Зберігайте свої <strong>паролі</strong> в <strong>безпечному</strong> та <strong>зашифрованому менеджері паролів</strong>."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "Avoid using easily <strong>guessable information</strong>, like your name or birthdate."
                                        : "Уникайте використання легко <strong>вгадуваної інформації</strong>, як ваше ім'я або дата народження."
                                }} />
                            </ul>
                            
                            <p className="mt-6" dangerouslySetInnerHTML={{
                                __html: language === 'en'
                                    ? "Protect your <strong>online presence</strong> by creating <strong>strong and unique passwords</strong> with our <strong>password generator</strong>."
                                    : "Захистіть свою <strong>онлайн-присутність</strong>, створюючи <strong>міцні та унікальні паролі</strong> за допомогою нашого <strong>генератора паролів</strong>."
                            }} />
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#2A4E63] mb-2">
                                {language === 'en' ? 'Best Practices:' : 'Найкращі практики:'}
                            </h4>
                            <ul className="text-[16px] text-[#071016] space-y-1">
                                <li>• {language === 'en' ? "Use at least 12 characters" : "Використовуйте щонайменше 12 символів"}</li>
                                <li>• {language === 'en' ? "Include mixed character types" : "Включіть різні типи символів"}</li>
                                <li>• {language === 'en' ? "Avoid common patterns" : "Уникайте поширених патернів"}</li>
                                <li>• {language === 'en' ? "Update passwords regularly" : "Регулярно оновлюйте паролі"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToUse;
