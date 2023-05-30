import icon from "./images/contact-icon.svg";

/* -------------------------------------------------------------------------- */
/*                                Element theme                               */
/* -------------------------------------------------------------------------- */
/* ------------------------------ Midnight Blue ----------------------------- */
const color = {
  hex: "#3d3b78",
  filter:
    "invert(21%) sepia(48%) saturate(916%) hue-rotate(205deg) brightness(95%) contrast(89%)",
};
/* --------------------------------- Sunglow -------------------------------- */
const backgroundColor = "#e7a403";

function contact() {
  const figure = document.createElement("figure");
  const img = new Image();
  img.src = icon;
  img.style.filter = color.filter;
  img.style.width = "150px";
  figure.appendChild(img);
  const figCaption = document.createElement("figcaption");
  figCaption.textContent = "Contact";
  figure.appendChild(figCaption);
  figure.style.backgroundColor = backgroundColor;
  figure.style.color = color.hex;
  return figure;
}

export default contact;
