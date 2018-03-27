window.onload = () => {
  let userLang = getLang(false);
  let navDiv = document.getElementById("nav-container");
  contents[userLang].navItems.forEach((item, i) => {
    let elDiv = document.createElement("div");
    let link = document.createElement("a");
    link.href = contents.links.navLinks[i];
    let node = document.createTextNode(item);
    link.appendChild(node);
    if (i == contents.links.navLinks.length - 1) {
      let image = document.createElement("img");
      image.id = "github-logo"
      image.src = "images/GitHub-Mark-Light-32px.png";
      link.appendChild(image);
    }
    elDiv.appendChild(link);
    navDiv.appendChild(elDiv);
  });
};
