import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log('onFirstAction fired');
  },

  onConsent: function ({ cookie }) {
    console.log('onConsent fired ...');
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log('onChange fired ...');
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    marketing: {
      enabled: false,
      readOnly: false,
    },
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: "We value your privacy",
          description: "We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can manage your preferences. For more info, see our Privacy Policy.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all except necessary",
          showPreferencesBtn: "Customize",
        },
        preferencesModal: {
          title: "Cookie preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all except necessary",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          sections: [
            {
              title: "Cookie usage",
              description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.",
            },
            {
              title: "Strictly necessary cookies",
              description: "These cookies are essential for the website to function properly. They cannot be switched off.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics cookies",
              description: "These cookies help us understand how visitors interact with our website, discover errors, and provide better overall analytics.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing cookies",
              description: "These cookies are used to deliver personalized advertisements and track advertising campaign performance.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      ua: {
        consentModal: {
          title: "Ми цінуємо вашу приватність",
          description: "Ми використовуємо cookie для покращення вашого досвіду, аналізу трафіку та маркетингу. Ви можете керувати своїми налаштуваннями. Детальніше у нашій Політиці конфіденційності.",
          acceptAllBtn: "Прийняти всі",
          acceptNecessaryBtn: "Відхилити всі, крім необхідних",
          showPreferencesBtn: "Налаштувати",
        },
        preferencesModal: {
          title: "Налаштування cookie",
          acceptAllBtn: "Прийняти всі",
          acceptNecessaryBtn: "Відхилити всі, крім необхідних",
          savePreferencesBtn: "Зберегти вибір",
          closeIconLabel: "Закрити",
          sections: [
            {
              title: "Використання cookie",
              description: "Ми використовуємо cookie для забезпечення базових функцій сайту та покращення вашого досвіду. Ви можете обирати для кожної категорії окремо.",
            },
            {
              title: "Необхідні cookie",
              description: "Ці cookie необхідні для коректної роботи сайту. Вимкнути їх неможливо.",
              linkedCategory: "necessary",
            },
            {
              title: "Аналітичні cookie",
              description: "Ці cookie допомагають нам розуміти, як відвідувачі взаємодіють із сайтом, знаходити помилки та покращувати аналітику.",
              linkedCategory: "analytics",
            },
            {
              title: "Маркетингові cookie",
              description: "Ці cookie використовуються для персоналізованої реклами та відстеження ефективності кампаній.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      es: {
        consentModal: {
          title: "Valoramos tu privacidad",
          description: "Utilizamos cookies para mejorar tu experiencia, analizar el uso del sitio y ayudar en nuestros esfuerzos de marketing. Puedes gestionar tus preferencias. Para más información, consulta nuestra Política de Privacidad.",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo excepto lo necesario",
          showPreferencesBtn: "Personalizar",
        },
        preferencesModal: {
          title: "Preferencias de cookies",
          acceptAllBtn: "Aceptar todo",
          acceptNecessaryBtn: "Rechazar todo excepto lo necesario",
          savePreferencesBtn: "Guardar preferencias",
          closeIconLabel: "Cerrar",
          sections: [
            {
              title: "Uso de cookies",
              description: "Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar tu experiencia en línea. Puedes elegir para cada categoría si deseas aceptarlas o no en cualquier momento.",
            },
            {
              title: "Cookies estrictamente necesarias",
              description: "Estas cookies son esenciales para el funcionamiento del sitio web. No se pueden desactivar.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies de análisis",
              description: "Estas cookies nos ayudan a comprender cómo los visitantes interactúan con nuestro sitio web, descubrir errores y proporcionar mejores análisis generales.",
              linkedCategory: "analytics",
            },
            {
              title: "Cookies de marketing",
              description: "Estas cookies se utilizan para ofrecer anuncios personalizados y realizar un seguimiento del rendimiento de las campañas publicitarias.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      fr: {
        consentModal: {
          title: "Nous respectons votre vie privée",
          description: "Nous utilisons des cookies pour améliorer votre expérience, analyser l'utilisation du site et contribuer à nos efforts de marketing. Vous pouvez gérer vos préférences. Pour plus d'informations, consultez notre Politique de Confidentialité.",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Refuser tout sauf le nécessaire",
          showPreferencesBtn: "Personnaliser",
        },
        preferencesModal: {
          title: "Préférences des cookies",
          acceptAllBtn: "Tout accepter",
          acceptNecessaryBtn: "Refuser tout sauf le nécessaire",
          savePreferencesBtn: "Enregistrer les préférences",
          closeIconLabel: "Fermer",
          sections: [
            {
              title: "Utilisation des cookies",
              description: "Nous utilisons des cookies pour garantir les fonctionnalités de base du site Web et améliorer votre expérience en ligne. Vous pouvez choisir pour chaque catégorie d'accepter ou non à tout moment.",
            },
            {
              title: "Cookies strictement nécessaires",
              description: "Ces cookies sont essentiels au bon fonctionnement du site Web. Ils ne peuvent pas être désactivés.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies d'analyse",
              description: "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site Web, à découvrir des erreurs et à fournir de meilleures analyses globales.",
              linkedCategory: "analytics",
            },
            {
              title: "Cookies marketing",
              description: "Ces cookies sont utilisés pour diffuser des publicités personnalisées et suivre les performances des campagnes publicitaires.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
