import icon from "./images/menu-icon.svg";

/* -------------------------------------------------------------------------- */
/*                                Element theme                               */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Outer Space ------------------------------ */
const color = {
  hex: "#56433a",
  filter:
    "invert(22%) sepia(15%) saturate(846%) hue-rotate(335deg) brightness(102%) contrast(85%)",
};
/* ----------------------------- Caribbean Green ---------------------------- */
const backgroundColor = "#20edc9";

function menu() {
  const figure = document.createElement("figure");
  const img = new Image();
  img.src = icon;
  img.style.filter = color.filter;
  img.style.width = "150px";
  figure.appendChild(img);
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = "Menu";
  figure.appendChild(figCaption);
  figure.style.backgroundColor = backgroundColor;
  figure.style.color = color.hex;
  return figure;
}

export default menu;
