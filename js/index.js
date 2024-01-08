//formulario
const form = document.querySelector(".contato");

const mascara = document.querySelector(".mascara_form");

function open_form () {
    form.style.right = "50px";
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

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            block: "nearest",
            behavior: "smooth",  
        });

        items[currentItem].classList.add("current-item");
    })
});

// fim da galeria projetos

// LGPD
let lgpdHtml = `
<div class="lgpd">
    <div class="lgpd_left">
      <h2>Aviso de Cookies</h2>
      <p>Utilizamos cookies para oferecer a melhor experiencia e analisar o uso do nosso site. Para mais informacoes, consulte a nossa <a href="../media/Politica-de-Privacidade.pdf" title="polica de privacidade">Política de Privacidade</a></p>
    </div>
    <div class="lgpd_rigth">
      <button type="button" title="fechar">Fechar</button>
    </div>
  </div>
`
let lsContent = localStorage.getItem('lgpd');

if (!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector(".lgpd");
    let buttonlgpd = lgpdArea.querySelector('button');

    buttonlgpd.addEventListener('click', () => {
        lgpdArea.remove()

        let idAleatorio = Math.random()*10;

        localStorage.setItem('lgpd', idAleatorio);
    })
}
// fim LGPD
