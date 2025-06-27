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

  onFirstConsent: function ({ cookie }) {
    // console.log('onFirstAction fired');
  },

  onConsent: function ({ cookie }) {
    // console.log('onConsent fired ...');
  },

  onChange: function ({ changedCategories, cookie }) {
    // console.log('onChange fired ...');
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
          description: "Ми використовуємо cookie для покращення вашого досвіту, аналізу трафіку та маркетингу. Ви можете керувати своїми налаштуваннями. Детальніше у нашій Політиці конфіденційності.",
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
              description: "Ми використовуємо cookie для забезпечення базових функцій сайту та покращення вашого досвіту. Ви можете обирати для кожної категорії окремо.",
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
      de: {
        consentModal: {
          title: "Wir schätzen Ihre Privatsphäre",
          description: "Wir verwenden Cookies, um Ihr Erlebnis zu verbessern, die Nutzung der Website zu analysieren und unsere Marketingbemühungen zu unterstützen. Sie können Ihre Einstellungen verwalten. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle außer notwendige ablehnen",
          showPreferencesBtn: "Anpassen",
        },
        preferencesModal: {
          title: "Cookie-Einstellungen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle außer notwendige ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Schließen",
          sections: [
            {
              title: "Cookie-Verwendung",
              description: "Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie ein- oder aussteigen möchten.",
            },
            {
              title: "Unbedingt notwendige Cookies",
              description: "Diese Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich. Sie können nicht deaktiviert werden.",
              linkedCategory: "necessary",
            },
            {
              title: "Analyse-Cookies",
              description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, Fehler zu entdecken und bessere Analysen zu liefern.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing-Cookies",
              description: "Diese Cookies werden verwendet, um personalisierte Anzeigen zu liefern und die Leistung von Werbekampagnen zu verfolgen.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      it: {
        consentModal: {
          title: "Valorizziamo la tua privacy",
          description: "Utilizziamo i cookie per migliorare la tua esperienza, analizzare l'utilizzo del sito e supportare i nostri sforzi di marketing. Puoi gestire le tue preferenze. Per maggiori informazioni, consulta la nostra Informativa sulla Privacy.",
          acceptAllBtn: "Accetta tutto",
          acceptNecessaryBtn: "Rifiuta tutto tranne il necessario",
          showPreferencesBtn: "Personalizza",
        },
        preferencesModal: {
          title: "Preferenze sui cookie",
          acceptAllBtn: "Accetta tutto",
          acceptNecessaryBtn: "Rifiuta tutto tranne il necessario",
          savePreferencesBtn: "Salva preferenze",
          closeIconLabel: "Chiudi",
          sections: [
            {
              title: "Utilizzo dei cookie",
              description: "Utilizziamo i cookie per garantire le funzionalità di base del sito web e migliorare la tua esperienza online. Puoi scegliere per ogni categoria se accettare o meno in qualsiasi momento.",
            },
            {
              title: "Cookie strettamente necessari",
              description: "Questi cookie sono essenziali per il corretto funzionamento del sito web. Non possono essere disattivati.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookie di analisi",
              description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web, scoprire errori e fornire analisi migliori.",
              linkedCategory: "analytics",
            },
            {
              title: "Cookie di marketing",
              description: "Questi cookie sono utilizzati per fornire annunci personalizzati e tracciare le prestazioni delle campagne pubblicitarie.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      pt: {
        consentModal: {
          title: "Valorizamos sua privacidade",
          description: "Usamos cookies para melhorar sua experiência, analisar o uso do site e auxiliar em nossos esforços de marketing. Você pode gerenciar suas preferências. Para mais informações, consulte nossa Política de Privacidade.",
          acceptAllBtn: "Aceitar tudo",
          acceptNecessaryBtn: "Rejeitar tudo exceto o necessário",
          showPreferencesBtn: "Personalizar",
        },
        preferencesModal: {
          title: "Preferências de cookies",
          acceptAllBtn: "Aceitar tudo",
          acceptNecessaryBtn: "Rejeitar tudo exceto o necessário",
          savePreferencesBtn: "Salvar preferências",
          closeIconLabel: "Fechar",
          sections: [
            {
              title: "Uso de cookies",
              description: "Usamos cookies para garantir as funcionalidades básicas do site e melhorar sua experiência online. Você pode escolher para cada categoria se deseja aceitar ou não a qualquer momento.",
            },
            {
              title: "Cookies estritamente necessários",
              description: "Esses cookies são essenciais para o funcionamento adequado do site. Eles não podem ser desativados.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookies de análise",
              description: "Esses cookies nos ajudam a entender como os visitantes interagem com nosso site, descobrir erros e fornecer análises melhores.",
              linkedCategory: "analytics",
            },
            {
              title: "Cookies de marketing",
              description: "Esses cookies são usados para fornecer anúncios personalizados e rastrear o desempenho das campanhas publicitárias.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      ru: {
        consentModal: {
          title: "Мы ценим вашу конфиденциальность",
          description: "Мы используем файлы cookie для улучшения вашего опыта, анализа использования сайта и помощи в наших маркетинговых усилиях. Вы можете управлять своими настройками. Для получения дополнительной информации см. нашу Политику конфиденциальности.",
          acceptAllBtn: "Принять все",
          acceptNecessaryBtn: "Отклонить все, кроме необходимых",
          showPreferencesBtn: "Настроить",
        },
        preferencesModal: {
          title: "Настройки cookie",
          acceptAllBtn: "Принять все",
          acceptNecessaryBtn: "Отклонить все, кроме необходимых",
          savePreferencesBtn: "Сохранить настройки",
          closeIconLabel: "Закрыть",
          sections: [
            {
              title: "Использование cookie",
              description: "Мы используем файлы cookie для обеспечения основных функций веб-сайта и улучшения вашего онлайн-опыта. Вы можете выбрать для каждой категории, хотите ли вы принять их или нет в любое время.",
            },
            {
              title: "Строго необходимые cookie",
              description: "Эти cookie необходимы для правильной работы веб-сайта. Их нельзя отключить.",
              linkedCategory: "necessary",
            },
            {
              title: "Аналитические cookie",
              description: "Эти cookie помогают нам понять, как посетители взаимодействуют с нашим веб-сайтом, обнаруживать ошибки и предоставлять лучшую аналитику.",
              linkedCategory: "analytics",
            },
            {
              title: "Маркетинговые cookie",
              description: "Эти cookie используются для предоставления персонализированной рекламы и отслеживания эффективности рекламных кампаний.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      zh: {
        consentModal: {
          title: "我们重视您的隐私",
          description: "我们使用cookie来改善您的体验、分析网站使用情况并协助我们的营销工作。您可以管理您的偏好设置。更多信息，请参阅我们的隐私政策。",
          acceptAllBtn: "接受全部",
          acceptNecessaryBtn: "拒绝除必要之外的所有",
          showPreferencesBtn: "自定义",
        },
        preferencesModal: {
          title: "Cookie偏好设置",
          acceptAllBtn: "接受全部",
          acceptNecessaryBtn: "拒绝除必要之外的所有",
          savePreferencesBtn: "保存偏好设置",
          closeIconLabel: "关闭",
          sections: [
            {
              title: "Cookie使用",
              description: "我们使用cookie来确保网站的基本功能并改善您的在线体验。您可以为每个类别选择是否随时接受。",
            },
            {
              title: "严格必要的Cookie",
              description: "这些cookie对于网站的正常运行至关重要。它们无法被关闭。",
              linkedCategory: "necessary",
            },
            {
              title: "分析Cookie",
              description: "这些cookie帮助我们了解访问者如何与我们的网站互动，发现错误并提供更好的整体分析。",
              linkedCategory: "analytics",
            },
            {
              title: "营销Cookie",
              description: "这些cookie用于提供个性化广告和跟踪广告活动效果。",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      ja: {
        consentModal: {
          title: "私たちはあなたのプライバシーを大切にしています",
          description: "私たちは、あなたの体験を向上させ、サイトの使用状況を分析し、マーケティング活動を支援するためにクッキーを使用しています。設定を管理できます。詳細については、プライバシーポリシーをご覧ください。",
          acceptAllBtn: "すべて受け入れる",
          acceptNecessaryBtn: "必要なもの以外を拒否",
          showPreferencesBtn: "カスタマイズ",
        },
        preferencesModal: {
          title: "Cookie設定",
          acceptAllBtn: "すべて受け入れる",
          acceptNecessaryBtn: "必要なもの以外を拒否",
          savePreferencesBtn: "設定を保存",
          closeIconLabel: "閉じる",
          sections: [
            {
              title: "Cookieの使用",
              description: "私たちは、ウェブサイトの基本機能を確保し、オンライン体験を向上させるためにクッキーを使用しています。各カテゴリについて、いつでも受け入れるかどうかを選択できます。",
            },
            {
              title: "厳密に必要なCookie",
              description: "これらのCookieは、ウェブサイトが正常に機能するために不可欠です。無効にすることはできません。",
              linkedCategory: "necessary",
            },
            {
              title: "分析Cookie",
              description: "これらのCookieは、訪問者が私たちのウェブサイトとどのように相互作用するかを理解し、エラーを発見し、より良い全体的な分析を提供するのに役立ちます。",
              linkedCategory: "analytics",
            },
            {
              title: "マーケティングCookie",
              description: "これらのCookieは、パーソナライズされた広告を配信し、広告キャンペーンのパフォーマンスを追跡するために使用されます。",
              linkedCategory: "marketing",
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
