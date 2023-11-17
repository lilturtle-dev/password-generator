import React, { useState } from 'react';

function AboutUs(props) {
    const language = props.language;
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div className='mt-6 bottom-16 mx-auto h-auto'>
            <div className='items-center justify-between'>
                <h2 className='lg:text-[40px] text-[24px] text-[#071016] font-semibold'>{language === 'en' ? 'About Us' : 'Про нас:'}</h2>
                <div className='text-[18px] text-[#071016] m-3'>
                    {language === 'en' ? (
                        <>
                            <p>Welcome to our platform, where we are dedicated to providing you with secure solutions for your digital needs. Our mission is to assist you in navigating the complex digital landscape with ease and confidence.</p>
                            {seeMore && (<><p className='font-bold py-6'>Who We Are:</p>
                            <p>We are a team of dedicated professionals with a passion for technology and a commitment to your security. We understand the importance of protecting your online presence, and that's why we offer a range of tools and resources to help you achieve that goal.</p>
                            <p className='font-bold py-6'>What We Offer:</p>
                            <ul>
                                <li>Secure Password Generation: Our password generator ensures that your online accounts are protected with strong and unique passwords.</li>
                                <li>Data Encryption: We provide encryption solutions to keep your sensitive data safe from prying eyes.</li>
                                <li>Cybersecurity Resources: Stay informed and up-to-date on the latest cybersecurity trends and best practices.</li>
                            </ul>
                            <p className='font-bold py-6'>Why Choose Us:</p>
                            <p>At our core, we value your security and privacy above all else. Our tools are designed with your protection in mind, and our team is committed to providing you with the best resources for a safer online experience.</p>
                            <p>Join us in the journey to a safer and more secure digital world.</p>
                            </>)}
                            <h2 className=' text-[18px] text-[#96DBFF] font-semibold cursor-pointer' onClick={() => setSeeMore(!seeMore)}>{seeMore ? (language === "en" ? 'Show Less' : 'Менше') : (language === "en" ? 'Show More' : 'Більше')}</h2>
                        </>
                    ) : (
                        <>
                            <p>Ласкаво просимо на нашу платформу, де ми присвячені наданню вам безпечних рішень для ваших цифрових потреб. Наша місія - допомогти вам легко та з впевненістю орієнтуватися в складному цифровому світі.</p>
                            {seeMore && (<><p className='font-bold py-6'>Хто ми:</p>
                                <p>Ми - команда відданих професіоналів з пасією до технологій і зобов'язанням до вашої безпеки. Ми розуміємо важливість захисту вашої онлайн-присутності, і саме тому ми пропонуємо низку інструментів та ресурсів, щоб вам допомогти досягти цієї мети.</p>
                                <p className='font-bold py-6'>Що ми пропонуємо:</p>
                                <ul>
                                    <li>Генерація надійних паролів: Наш генератор паролів забезпечує захист ваших онлайн-акаунтів сильними та унікальними паролями.</li>
                                    <li>Шифрування даних: Ми надаємо рішення з шифрування, щоб зберегти ваші чутливі дані від пильних очей.</li>
                                    <li>Ресурси з кібербезпеки: Будьте в курсі останніх тенденцій та кращих практик у сфері кібербезпеки.</li>
                                </ul>
                                <p className='font-bold py-6'>Чому обирають нас:</p>
                                <p>В центрі нашої діяльності - ваша безпека та конфіденційність. Наші інструменти розроблені з урахуванням вашого захисту, і наша команда віддана наданню вам кращих ресурсів для безпечного онлайн-досвіду.</p>
                                <p>Приєднуйтеся до нас у подорожі до безпечнішого та більш захищеного цифрового світу.</p></>)}
                            <h2 className=' text-[18px] text-[#96DBFF] font-semibold cursor-pointer' onClick={() => setSeeMore(!seeMore)}>{seeMore ? (language === "en" ? 'Show Less' : 'Менше') : (language === "en" ? 'Show More' : 'Більше')}</h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
