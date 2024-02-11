import getHomePage from "./homePage";
import getMenuPage from "./menuPage";
import getAboutPage from "./aboutPage";

const contentBody = document.querySelector("#content");

const navInit = (() => {
  const navBtns = document.querySelectorAll(".navbtn");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      switch (event.target.id) {
        case "home":
          mainControls.loadPage(getHomePage());
          mainControls.setHomeMenuNav();
          break;
        case "menu":
          mainControls.loadPage(getMenuPage());
          break;
        case "about":
          mainControls.loadPage(getAboutPage());
          break;
      }
    });
  });
})();

class mainControls {
  static cleanContentBody() {
    contentBody.innerHTML = "";
  }
  static loadPage(page) {
    mainControls.cleanContentBody();
    contentBody.appendChild(page);
  }
  static setHomeMenuNav() {
    const target = document.querySelector(".home-menu-button");
    target.addEventListener("click", () => {
      mainControls.loadPage(getMenuPage());
    });
  }
}
