// Language switching functionality
const langEn = document.getElementById('lang-en');
const langRu = document.getElementById('lang-ru');

const translations = {
    en: {
        title: "Vyruchajka VPN",
        heroHeading: "Surf the Web with Privacy",
        heroText: "Experience secure and unrestricted internet access with Vyruchajka VPN.",
        featuresHeading: "Key Features",
        features: [
            { title: "Secure & Private", text: "Your data is protected with military-grade encryption, ensuring your online activities are safe from prying eyes." },
            { title: "Fast & Reliable", text: "Enjoy seamless browsing with lightning-fast connection speeds across all devices." },
            { title: "Global Access", text: "Unblock websites and enjoy unrestricted access to content from anywhere in the world." },
        ],
        aboutHeading: "About Vyruchajka VPN",
        aboutText: "At Vyruchajka VPN, we believe in providing a secure and private browsing experience for everyone. Join us in protecting your digital footprint."
    },
    ru: {
        title: "Vyruchajka VPN",
        heroHeading: "Серфите в Интернете с конфиденциальностью",
        heroText: "Испытайте безопасный и неограниченный доступ в Интернет с Vyruchajka VPN.",
        featuresHeading: "Ключевые функции",
        features: [
            { title: "Безопасно и конфиденциально", text: "Ваши данные защищены шифрованием военного уровня, что гарантирует безопасность ваших онлайн-действий." },
            { title: "Быстро и надежно", text: "Наслаждайтесь бесперебойным просмотром с молниеносной скоростью соединения на всех устройствах." },
            { title: "Глобальный доступ", text: "Разблокируйте веб-сайты и наслаждайтесь неограниченным доступом к контенту из любой точки мира." },
        ],
        aboutHeading: "О Vyruchajka VPN",
        aboutText: "В Vyruchajka VPN мы верим в предоставление безопасного и конфиденциального интернет-опыта для всех. Присоединяйтесь к нам в защите вашего цифрового следа."
    }
};

function changeLanguage(lang) {
    document.querySelector('header h1').textContent = translations[lang].title;
    document.querySelector('.hero h2').textContent = translations[lang].heroHeading;
    document.querySelector('.hero p').textContent = translations[lang].heroText;
    
    document.querySelector('.features h2').textContent = translations[lang].featuresHeading;
    const featureElements = document.querySelectorAll('.feature');
    featureElements.forEach((feature, index) => {
        feature.querySelector('h3').textContent = translations[lang].features[index].title;
        feature.querySelector('p').textContent = translations[lang].features[index].text;
    });

    document.querySelector('.about h2').textContent = translations[lang].aboutHeading;
    document.querySelector('.about p').textContent = translations[lang].aboutText;
}

langEn.addEventListener('click', function (e) {
    e.preventDefault();
    changeLanguage('en');
});

langRu.addEventListener('click', function (e) {
    e.preventDefault();
    changeLanguage('ru');
});

// Default language is English
changeLanguage('en');