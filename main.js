import "normalize.css";
import "./css/master.css";
import "./node_modules/@splidejs/splide/dist/css/splide.min.css";
import { NavBar } from "./js/nav-bar";
import Splide from "@splidejs/splide";
import AOS from "aos";
import emailjs from "emailjs-com";
emailjs.init(`${import.meta.env.VITE_EMAIL_USER_ID}`);

NavBar();

new Splide("#image-slider", {
  // cover: true,
  type: "fade",
  rewind: true,
  autoplay: true,
  heightRatio: 0.3,
  breakpoints: {
    630: {
      heightRatio: 0.5,
    },
  },
}).mount();

const servicesArray = Array.from(
  document.querySelectorAll(".service > .img-container")
);

servicesArray.forEach((item, index) => {
  if (index % 2) {
    item.dataset["aos"] = "fade-right";
  } else {
    item.dataset.aos = "fade-left";
  }
});

AOS.init();

const form = document.getElementById("contact-form");
const btn = document.getElementById("submit-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerText = "Enviando...";

  this.contact_number.value = (Math.random() * 100000) | 0;
  // these IDs from the previous steps
  emailjs
    .sendForm(
      `${import.meta.env.VITE_EMAIL_SERVICE}`,
      `${import.meta.env.VITE_EMAIL_TEMPLATE}`,
      this
    )
    .then(() => {
      btn.innerText = "Enviado!!";
      alert(`En poco nos contactaremos contigo!!`);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      form.reset();
    });
});
