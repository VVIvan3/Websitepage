export default function getAboutPage() {
  const aboutHolder = document.createElement("div");
  const aboutPic = document.createElement("div");
  const aboutTitle = document.createElement("div");
  const aboutText = document.createElement("div");
  const aboutContact = document.createElement("div");

  aboutPic.textContent = "placeholder";
  aboutContact.classList.add("about-pic");

  aboutTitle.textContent = "OVER 100 YEAR IN FOOD BUSINESS";
  aboutContact.classList.add("about-title");

  aboutText.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti velit laborum alias, possimus ducimus, atque impedit accusantium magnam adipisci explicabo minus ullam aspernatur, voluptatum eaque quae doloribus quos ab illo!";
  aboutText.classList.add("about-text");

  aboutContact.textContent = "+00000000000 mail@mail";
  aboutContact.classList.add("about-contact");

  aboutHolder.append(aboutTitle, aboutPic, aboutText, aboutContact);

  return aboutHolder;
}
