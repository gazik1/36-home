import pngegg from "./pngegg.png"
import styles from "./style.css";

const divElement = document.createElement("img");
divElement.src=pngegg
divElement.className=styles["imgWebpack"]
document.body.appendChild(divElement)
