import "./scss/styles.scss";

import { Dropdown, Modal, Carousel, Button, } from "bootstrap";

document.getElementById("newPostBtnInput").addEventListener("click", function () {
  const modalElement = document.getElementById("postModal");
  const postModal = new Modal(modalElement);
  postModal.show();

  setTimeout(() => {
    document.getElementById("writePostInput").focus();
  }, 500);
});

document.getElementById("themeSwitcher").addEventListener("click", function () {
  const htmlElement = document.querySelector("html");
  const iconElement = document.querySelector("#themeSwitcher>i");
  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    iconElement.classList.remove("bi-sun-fill");
    iconElement.classList.add("bi-moon-stars");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    iconElement.classList.remove("bi-moon-stars");
    iconElement.classList.add("bi-sun-fill");
  }
});