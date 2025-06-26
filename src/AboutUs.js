import React from 'react';

const AboutUs = ({ language }) => {
    return (
        <div className='mt-6 bottom-16 mx-auto h-auto max-w-6xl px-4'>
            <div className='items-center justify-between max-w-6xl'>
                <h2 className='lg:text-[40px] text-[24px] text-[#071016] font-semibold mb-8'>{language === 'en' ? 'About Us' : 'Про нас:'}</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    {/* Left Column - Who We Are */}
                    <div className="space-y-6 h-full flex flex-col">
                        <h3 className="text-xl font-semibold text-[#2A4E63]">
                            {language === 'en' ? 'Who We Are' : 'Хто ми'}
                        </h3>
                        
                        <div className='text-[18px] text-[#071016] leading-relaxed space-y-4 flex-grow'>
                            <p dangerouslySetInnerHTML={{
                                __html: language === 'en' 
                                    ? "Welcome to our platform, where we are dedicated to providing you with <strong>secure solutions</strong> for your <strong>digital needs</strong>. Our mission is to assist you in navigating the complex <strong>digital landscape</strong> with ease and confidence."
                                    : "Ласкаво просимо на нашу платформу, де ми присвячені наданню вам <strong>безпечних рішень</strong> для ваших <strong>цифрових потреб</strong>. Наша місія - допомогти вам легко та з впевненістю орієнтуватися в складному <strong>цифровому світі</strong>."
                            }} />
                            
                            <p dangerouslySetInnerHTML={{
                                __html: language === 'en'
                                    ? "We are a team of dedicated <strong>professionals</strong> with a passion for <strong>technology</strong> and a commitment to your <strong>security</strong>. We understand the importance of protecting your <strong>online presence</strong>, and that's why we offer a range of <strong>tools</strong> and <strong>resources</strong> to help you achieve that goal."
                                    : "Ми - команда відданих <strong>професіоналів</strong> з пасією до <strong>технологій</strong> і зобов'язанням до вашої <strong>безпеки</strong>. Ми розуміємо важливість захисту вашої <strong>онлайн-присутності</strong>, і саме тому ми пропонуємо низку <strong>інструментів</strong> та <strong>ресурсів</strong>, щоб вам допомогти досягти цієї мети."
                            }} />
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#2A4E63] mb-2">
                                {language === 'en' ? 'Our Mission:' : 'Наша місія:'}
                            </h4>
                            <p className="text-[16px] text-[#071016]">
                                {language === 'en' 
                                    ? "To provide secure, reliable, and user-friendly tools that protect your digital identity and enhance your online security."
                                    : "Надавати безпечні, надійні та зручні інструменти, які захищають вашу цифрову ідентичність та покращують вашу онлайн-безпеку."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Right Column - What We Offer */}
                    <div className="space-y-6 h-full flex flex-col">
                        <h3 className="text-xl font-semibold text-[#2A4E63]">
                            {language === 'en' ? 'What We Offer' : 'Що ми пропонуємо'}
                        </h3>
                        
                        <div className='text-[18px] text-[#071016] leading-relaxed space-y-4 flex-grow'>
                            <ul className='space-y-3'>
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "<strong>Secure Password Generation</strong>: Our <strong>password generator</strong> ensures that your <strong>online accounts</strong> are protected with <strong>strong and unique passwords</strong>."
                                        : "<strong>Генерація надійних паролів</strong>: Наш <strong>генератор паролів</strong> забезпечує захист ваших <strong>онлайн-акаунтів</strong> сильними та <strong>унікальними паролями</strong>."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "<strong>Data Encryption</strong>: We provide <strong>encryption solutions</strong> to keep your <strong>sensitive data</strong> safe from prying eyes."
                                        : "<strong>Шифрування даних</strong>: Ми надаємо <strong>рішення з шифрування</strong>, щоб зберегти ваші <strong>чутливі дані</strong> від пильних очей."
                                }} />
                                <li dangerouslySetInnerHTML={{
                                    __html: language === 'en'
                                        ? "<strong>Cybersecurity Resources</strong>: Stay informed and up-to-date on the latest <strong>cybersecurity trends</strong> and <strong>best practices</strong>."
                                        : "<strong>Ресурси з кібербезпеки</strong>: Будьте в курсі останніх <strong>тенденцій кібербезпеки</strong> та <strong>кращих практик</strong>."
                                }} />
                            </ul>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#2A4E63] mb-2">
                                {language === 'en' ? 'Why Choose Us:' : 'Чому обирають нас:'}
                            </h4>
                            <p className="text-[16px] text-[#071016] mb-3" dangerouslySetInnerHTML={{
                                __html: language === 'en'
                                    ? "At our core, we value your <strong>security</strong> and <strong>privacy</strong> above all else. Our <strong>tools</strong> are designed with your <strong>protection</strong> in mind."
                                    : "В центрі нашої діяльності - ваша <strong>безпека</strong> та <strong>конфіденційність</strong>. Наші <strong>інструменти</strong> розроблені з урахуванням вашого <strong>захисту</strong>."
                            }} />
                            <p className="text-[16px] text-[#071016]">
                                {language === 'en'
                                    ? "Join us in the journey to a safer and more secure digital world."
                                    : "Приєднуйтеся до нас у подорожі до безпечнішого та більш захищеного цифрового світу."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
