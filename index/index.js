// Imagenes del slider
const images = [
    "./img/safari4.jpg",
    "./img/safari5.jpg",
    "./img/safari3.png",
];

const audio_node = document.querySelector(".navR_content-left");

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
            audio.play();
            audio_node.value = "vol";
        } else {
            audio.pause();
            audio_node.value = "volx";
        }
        audio_node.innerHTML = `
            <img class="audio" src="./img/${audio_node.value}.svg" alt="audio">`
    });
}


changeImage();
changeAudio();