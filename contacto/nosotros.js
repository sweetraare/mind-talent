import "normalize.css";
import "../css/master.css";
import "./nosotros.css";
import "../node_modules/@splidejs/splide/dist/css/splide.min.css";
import { NavBar } from "../js/nav-bar";
import Splide from "@splidejs/splide";
import AOS from "aos";

NavBar();
AOS.init();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", (event) => {
  const data = event.formData;

  const dataObject = {};
  const entries = [...data.entries()];
  console.log(entries);

  entries.forEach((entry) => (dataObject[entry[0]] = entry[1]));

  console.log(dataObject);
  alert(
    `Gracias ${dataObject.nombre}, dentro de poco nos contactaremos contigo`
  );
  form.reset();
});
