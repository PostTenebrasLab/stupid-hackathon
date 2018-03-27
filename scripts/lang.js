function getLang(alertFlag) {
  let userLang = (navigator.language || navigator.userLanguage).substring(0,2);
  if (!(userLang in contents)) {
    userLang = "fr";
    if (alertFlag) {
      alert ("You are using an unsupported language, this page will be displayed in french / vous utilisez une langue non supportée, cette page sera affichée en français.");
    }
  }
  return userLang;
}
