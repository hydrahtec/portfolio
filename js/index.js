const form = document.querySelector(".contato");

const mascara = document.querySelector(".mascara");

function open_form () {
    form.style.right = "300px";
    mascara.style.visibility = "visible";
}

function close_form () {
    form.style.right = "-500px";
    mascara.style.visibility = "hidden";
}