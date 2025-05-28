// Imagenes del slider
const images = [
    "./img/safari4.jpg",
    "./img/safari5.jpg",
    "./img/safari3.png",
];

const audio_node = document.querySelector(".navR_content-left");
const menu_node = document.querySelector(".nav-left");

// Cambiar las imagenes dek slider con la de la variable "images"
let imagePosition = 0;
function changeImage() {
    document.querySelector(".header").style.backgroundImage = `url(${images[imagePosition]})`;
    if (imagePosition < images.length - 1) imagePosition++;
    else imagePosition = 0;
    setTimeout("changeImage()", 3000);
}

// Cambiar el icono de volumen con cada "click"
let audio = new Audio("./audio/audio.mp3");
function changeAudio() {
    audio_node.addEventListener("click", () => {
        if (audio_node.value == "volx") {
            //Reproducir audio
            audio.play();
            audio_node.value = "vol";
        } else {
            //Pausar audio
            audio.pause();
            audio_node.value = "volx";
        }
        audio_node.innerHTML = `
            <img class="audio" src="./img/${audio_node.value}.svg" alt="audio">`
    });
}

// Cambiar el icono de menu con cada "click"
function ChangeMenu() {
    menu_node.addEventListener("click", () => {
        if (menu_node.value == "open") {
            //Abrir menu
            document.querySelector(".header_menu").style.display = "flex";
            menu_node.value = "close";
        } else {
            //Cerrar menu
            document.querySelector(".header_menu").style.display = "none";
            menu_node.value = "open";
        }
        menu_node.innerHTML = `
            <img class="menu" src="./img/${menu_node.value}.svg" alt="">`
    })
}


changeImage();
changeAudio();
ChangeMenu();