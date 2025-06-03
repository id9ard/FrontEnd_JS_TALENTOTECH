// Imagenes del slider
const images = [
    "./img/safari4.jpg",
    "./img/safari5.jpg",
    "./img/safari3.png",
];

const audio_node = document.querySelector(".navR_content-left");
const menu_node = document.querySelector(".nav-left");
const section_form_node = document.querySelector("#section_form");
const item_form_node = document.querySelector("#item_form");
const boton_close_node = document.querySelector(".four_button-close");

// Cambiar las imagenes dek slider con la de la variable "images"
let imagePosition = 0;
function slider() {
    document.querySelector(".header").style.backgroundImage = `url(${images[imagePosition]})`;
    if (imagePosition < images.length - 1) imagePosition++;
    else imagePosition = 0;
    setTimeout("slider()", 3000);
}

// Cambiar el icono de volumen con cada "click"
let audioURL = new Audio("./audio/audio.mp3");
function audio() {
    audio_node.addEventListener("click", () => {
        if (audio_node.value == "volx") {
            //Reproducir audio
            audioURL.play();
            audio_node.value = "vol";
        } else {
            //Pausar audio
            audioURL.pause();
            audio_node.value = "volx";
        }
        audio_node.innerHTML = `
            <img class="audio" src="./img/${audio_node.value}.svg" alt="audio">`
    });
}

// Cambiar el icono de menu con cada "click"
function menu() {
    menu_node.addEventListener("click", () => {
        if (menu_node.value == "open") {
            //Abrir menu
            document.body.style.overflow = "hidden";
            document.querySelector(".header_menu").style.display = "flex";
            menu_node.value = "close";
            // Cerrar el menu si se hace click en alguna opcion
            selectSection();
        } else {
            //Cerrar menu
            document.body.style.overflow = "revert";
            document.querySelector(".header_menu").style.display = "none";
            menu_node.value = "open";
        }
        menu_node.innerHTML = `
            <img class="menu" src="./img/${menu_node.value}.svg" alt="">`
    })
}

function selectSection() {
    const section_node = document.querySelectorAll(".menu_text");
    section_node.forEach(element => {
        element.addEventListener("click", () => {
            document.body.style.overflow = "revert";
            document.querySelector(".header_menu").style.display = "none";
            menu_node.value = "open";
            menu_node.innerHTML = `
            <img class="menu" src="./img/${menu_node.value}.svg" alt="">`

            section_form_node.style.display = "none";
        })
    });
}

function openForm() {
    item_form_node.addEventListener("click", () => {
        section_form_node.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
}

function closeForm() {
    boton_close_node.addEventListener("click", () => {
        section_form_node.style.display = "none";
        document.body.style.overflow = "revert";
    });
}

slider();
audio();
menu();

openForm();
closeForm();