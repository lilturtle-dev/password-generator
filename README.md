# 🔐 Generate Password To Me

A modern web app for generating secure passwords with an intuitive interface and support for both Ukrainian and English languages.

## ✨ Features

- 🔒 **Secure password generation** – uses cryptographically strong algorithms
- 🌍 **Bilingual support** – Ukrainian and English
- 📊 **Password strength analysis** – shows estimated crack time
- 🎛️ **Flexible settings** – password length from 4 to 100 characters
- 🔢 **Character selection** – uppercase/lowercase letters, numbers, special symbols
- 📋 **Bulk copy** – generate and copy multiple passwords
- 💾 **Export passwords** – download passwords as a text file
- 📱 **Responsive design** – works on all devices
- ⚡ **Fast performance** – instant password generation

## 🚀 Quick Start

### Requirements
- Node.js 14.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/password-generator.git
cd password-generator
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the project**
```bash
npm start
```

4. **Open in your browser**
```
http://localhost:3000
```

## 🛠️ Technologies

- **Frontend**: React 18
- **UI Framework**: Material-UI (MUI) v5
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Password Analysis**: zxcvbn
- **SEO**: React Helmet
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── AppEn.jsx          # English version of the app
│   ├── AppUa.jsx          # Ukrainian version of the app
│   ├── Header.jsx         # Header with language switcher
│   ├── Footer.jsx         # Site footer
│   ├── SeoText.jsx        # SEO text
│   ├── HowToUse.jsx       # Usage instructions
│   ├── AboutUs.jsx        # About us
│   ├── SeoList.jsx        # SEO list
│   ├── AdBanner.jsx       # Ad banner
│   └── PrivacyConsentPopup.js # Cookie consent popup
├── functions/
│   ├── RankColor.js       # Password strength color functions
│   └── GetStrengthWord.js # Password strength word functions
├── images/                # Images and icons
├── App.jsx               # Main component with routing
└── index.js              # Entry point
```

## 🎯 How to Use

### 1. Generate a password
- Select password length (4-100 characters)
- Choose the number of passwords to generate
- Check the character types you want:
  - **A-Z** – uppercase letters
  - **a-z** – lowercase letters
  - **0-9** – numbers
  - **#$%** – special symbols

### 2. Strength analysis
- The app automatically analyzes the strength of each password
- Shows the estimated time to crack
- Uses the zxcvbn library for accurate analysis

### 3. Copying and export
- **Copy** – copies a single password
- **Copy all** – copies all generated passwords
- **Download all** – saves passwords to a text file

## 🔧 Configuration

### Environment variables
```env
REACT_APP_GTM_ID=GTM-KR2SHTKB  # Google Tag Manager ID
```

### Modes
- **development** – development mode
- **production** – production mode with ads

## 📱 Responsiveness

The app is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large monitors

## 🌐 SEO Optimization

- Meta tags for each page
- Structured data
- Optimized headings
- Fast loading

## 🔒 Security

- Passwords are generated locally in the browser
- No data is sent to the server
- Uses cryptographically strong algorithms
- Real-time strength analysis

## 📊 Analytics

- Google Tag Manager for tracking
- Feature usage analytics
- Error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support

If you have questions or issues:
- Create an Issue on GitHub
- Send a direct message on [GitHub](https://github.com/lilturtle-dev)
- If you find the project useful — please ⭐ star the repository!

## 🙏 Acknowledgements

- [zxcvbn](https://github.com/dropbox/zxcvbn) – for password strength analysis
- [Material-UI](https://mui.com/) – for UI components
- [Tailwind CSS](https://tailwindcss.com/) – for styling
- [React](https://reactjs.org/) – for the framework

---

**Made with ❤️ to keep your accounts secure**
