import icon from "./images/home-icon.svg";

/* -------------------------------------------------------------------------- */
/*                                Element theme                               */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Laser Lemon ------------------------------ */
const color = {
  hex: "#fff36c",
  filter:
    "invert(97%) sepia(23%) saturate(2121%) hue-rotate(321deg) brightness(108%) contrast(103%)",
};
/* ------------------------------- Rev Violet ------------------------------- */
const backgroundColor = "#b63a92";

function home() {
  const figure = document.createElement("figure");
  const img = new Image();
  img.src = icon;
  img.style.filter = color.filter;
  img.style.width = "150px";
  figure.appendChild(img);
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = "Home";
  figure.appendChild(figCaption);
  figure.style.backgroundColor = backgroundColor;
  figure.style.color = color.hex;
  return figure;
}

export default home;
