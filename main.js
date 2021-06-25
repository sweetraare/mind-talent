import "normalize.css";
import "./css/master.css";
import "./node_modules/@splidejs/splide/dist/css/splide.min.css";
import { NavBar } from "./js/nav-bar";
import Splide from "@splidejs/splide";
import AOS from "aos";

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
