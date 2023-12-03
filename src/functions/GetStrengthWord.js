export function getStrengthWord(score, language) {
    switch (score) {
      case 1:
        return language === "ua" ? "Дуже слабкий" : "Very Weak";
      case 2:
        return language === "ua" ? "Слабкий" : "Weak";
      case 3:
        return language === "ua" ? "Середній" : "Moderate";
      case 4:
        return language === "ua" ? "Сильний" : "Strong";
      default:
        return language === "ua" ? "Дуже слабкий" : "Very Weak";
    }
  }
  