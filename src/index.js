import homeElement from "./home.js";
import menuElement from "./menu.js";
import contactElement from "./contact.js";
import "./style.css";

/* -------------------------------------------------------------------------- */
/*                                Page Content                                */
/* -------------------------------------------------------------------------- */
/* --------------------------- Header construction -------------------------- */
const header = document.createElement("header");
header.classList.add("header");
const menu = document.createElement("menu");
menu.classList.add("menu");
const menuList = ["home", "menu", "contact"];
menuList.forEach((option) => {
  const button = document.createElement("button");
  button.classList.add("menu__btn", `btn-${option}`);
  button.textContent = option;

  const listItem = document.createElement("li");
  listItem.appendChild(button);
  menu.appendChild(listItem);
});
header.appendChild(menu);

/* ---------------------------- Main construction --------------------------- */
const main = document.createElement("main");
main.classList.add("main");

/* --------------------------- Footer construction -------------------------- */
const footer = document.createElement("footer");
footer.classList.add("footer");
const footerContent = document.createElement("div");
footerContent.classList.add("footer__content");
footerContent.textContent = "Made by Arturop";
footer.appendChild(footerContent);

const pageContent = document.querySelector("#content");
pageContent.append(header, main, footer);

/* -------------------------------------------------------------------------- */
/*                        Display Main Content Function                       */
/* -------------------------------------------------------------------------- */
function displayMainContent(option) {
  const main = document.querySelector(".main");
  main.replaceChildren();
  let moduleElement;
  switch (option) {
    case "home":
      moduleElement = homeElement();
      break;
    case "menu":
      moduleElement = menuElement();
      break;
    case "contact":
      moduleElement = contactElement();
      break;
    default:
  }
  moduleElement.classList.add("main__element");
  main.appendChild(moduleElement);
}

/* -------------------------------------------------------------------------- */
/*                     Menu buttons event listeners setup                     */
/* -------------------------------------------------------------------------- */
const btnHome = document.querySelector(".btn-home");
btnHome.addEventListener("click", () => displayMainContent("home"));

const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener("click", () => displayMainContent("menu"));

const btnContact = document.querySelector(".btn-contact");
btnContact.addEventListener("click", () => displayMainContent("contact"));

/* -------------------------------------------------------------------------- */
/*                            Initial Page Content                            */
/* -------------------------------------------------------------------------- */
displayMainContent("home");
