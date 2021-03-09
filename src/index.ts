import Color from "./color";

const div: HTMLElement = document.querySelector(".output");

const color = Color.rgb(1, .5, 0);
div.style.setProperty("background", color.toRgbaString());

div.textContent = color.toHexString();