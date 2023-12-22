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
//fim formulario

// toggle mobile

const hamburger = document.querySelector(".btn_hamburger");

const link = document.querySelector(".div_link")

const nav = document.querySelector(".nav");

const links = document.querySelector(".link");

const a = document.querySelectorAll(".a")


function add_class () {
    hamburger.classList.toggle("open");
    link.classList.toggle("active");
};

// a.addEventListener("click", add_class);
hamburger.addEventListener("click", add_class);
links.addEventListener("click", add_class);

//fim toggle mobile

// galeria projetos

const controls = document.querySelectorAll(".control");

let currentItem = 0;

const items = document.querySelectorAll(".item");

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isleft = control.classList.contains('seta-left');
        
        if (isleft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem <= 0) {
            currentItem = maxItems - 1;
        }

        console.log ("clicado", isleft, currentItem);
    })
});
