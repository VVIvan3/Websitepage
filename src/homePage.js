export default function getHomePage() {
  const contentHolder = document.createElement("div");
  const title = document.createElement("div");
  const subtitle = document.createElement("div");
  const homeMenuNav = document.createElement("button");

  contentHolder.classList.add("home-content");
  title.classList.add("home-title");
  subtitle.classList.add("home-subtitle");
  homeMenuNav.classList.add("home-menu-button");

  title.textContent = "Restaurant name";
  subtitle.textContent = "Cooking tasty food since 1907";
  homeMenuNav.textContent = "Our menu";

  title.appendChild(subtitle);
  contentHolder.append(title, homeMenuNav);

  return contentHolder;
}
