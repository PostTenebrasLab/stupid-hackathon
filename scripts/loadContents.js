let lang = getLang(true);
let misc = contents[lang].misc;

misc.forEach((element) => {
  let domElement = document.getElementById(element.id);
  if (domElement) {
    domElement.innerHTML = element.contents;
  }
});
