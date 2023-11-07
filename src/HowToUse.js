import React, { useState } from 'react';

function HowToUse(props) {
    const language = props.language;
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className='mt-6 bottom-16 mx-auto h-auto'>
            <div className='items-center justify-between'>
                <h2 className='text-[40px] text-[#071016] font-semibold'>{language === 'en' ? 'How to Use' : 'Як використовувати:'}</h2>
                <div className='text-[18px] text-[#071016] m-3'>
                    {language === 'en' ? (
                        <>
                            <p className='font-bold py-6'>Using the password generator is simple. Just follow these steps:</p>
                            <ol>
                                <li>Click on the "Generate Password" button.</li>
                                <li>Customize your password by selecting the desired length and including special characters, numbers, and uppercase letters.</li>
                                <li>Click "Generate," and your secure password will be generated instantly.</li>
                            </ol>{seeMore && (<>
                            <p className='font-bold py-6'>Security Tips:</p>
                            <ul>
                                <li>Never use the same password for multiple accounts.</li>
                                <li>Change your passwords regularly.</li>
                                <li>Store your passwords in a secure and encrypted password manager.</li>
                                <li>Avoid using easily guessable information, like your name or birthdate.</li>
                            </ul>
                            <p>Protect your online presence by creating strong and unique passwords with our password generator.</p>
                            </>)}
                            <h2 className=' text-[18px] text-[#96DBFF] font-semibold cursor-pointer' onClick={() => setSeeMore(!seeMore)}>{seeMore ? (language === "en" ? 'Show Less' : 'Менше') : (language === "en" ? 'Show More' : 'Більше')}}</h2>
                        </>
                    ) : (
                        <>
                            <p className='font-bold py-6'>Використання генератора паролів просто. Просто слідуйте цим крокам:</p>
                            <ol>
                                <li>Натисніть кнопку "Згенерувати пароль".</li>
                                <li>Налаштуйте свій пароль, вибираючи бажану довжину та включаючи спеціальні символи, цифри та великі літери.</li>
                                <li>Натисніть "Згенерувати", і ваш надійний пароль буде створено миттєво.</li>
                            </ol>{seeMore && (<>
                            <p className='font-bold py-6'>Поради щодо безпеки:</p>
                            <ul>
                                <li>Ніколи не використовуйте один і той самий пароль для кількох облікових записів.</li>
                                <li>Регулярно змінюйте паролі.</li>
                                <li>Зберігайте свої паролі в безпечному та зашифрованому менеджері паролів.</li>
                                <li>Уникайте використання легко вгадуваної інформації, такої як ваше ім'я чи дата народження.</li>
                            </ul>
                            <p>Захистіть свою онлайн-присутність, створюючи міцні та унікальні паролі за допомогою нашого генератора паролів.</p>
                            </>)}
                            <h2 className=' text-[18px] text-[#96DBFF] font-semibold cursor-pointer' onClick={() => setSeeMore(!seeMore)}>{seeMore ? (language === "en" ? 'Show Less' : 'Менше') : (language === "en" ? 'Show More' : 'Більше')}</h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HowToUse;
