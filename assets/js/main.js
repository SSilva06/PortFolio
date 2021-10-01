"use strict";

const Nav = document.querySelector(".navbar");
const Btn = document.getElementById("");
const Normal = () => {
    Nav.style.backgroundColor = "transparent";
    Nav.style.padding = "5px";
    Btn.style.marginTop = "3px";
};
const Change = () => {
    Nav.style.backgroundColor = "#1C1919";
    Nav.style.padding = "8px";
    Btn.style.marginTop = "-3px";
};window.addEventListener("scroll", function () {
    (window.scrollY > 0)?Change():Normal()});