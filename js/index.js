//formulario
const form = document.querySelector(".contato");

const mascara = document.querySelector(".mascara_form");

function open_form () {
    form.style.right = "200px";
    mascara.style.visibility = "visible";
}

function close_form () {
    form.style.right = "-500px";
    mascara.style.visibility = "hidden";
}

// toggle mobile

const hamburger = document.querySelector(".btn_hamburger");

const link = document.querySelector(".div_link")

const nav = document.querySelector(".nav");

const links = document.querySelector(".link");

const a = document.querySelectorAll(".a")

hamburger.addEventListener("click", add_class);

function add_class () {
    hamburger.classList.toggle("open");
    link.classList.toggle("active");
};

links.addEventListener("click", add_class);
a.addEventListener("click", add_class);