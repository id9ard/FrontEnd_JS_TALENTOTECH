// Cambiar el icono de menu con cada "click"
const menu_node = document.querySelector(".nav-left");
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
            <img class="menu" src="../img/${menu_node.value}.svg" alt="">`
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
            <img class="menu" src="../img/${menu_node.value}.svg" alt="">`

        })
    });
}

// Input nombre
let nombreInputSelector = document.querySelector("#gift-card__nombre-js");
let nombreCardSelector = document.querySelector(".tarjeta__destinatario");
let divErrorNombreSelector = document.querySelector("#error__nombre-js");

nombreInputSelector.addEventListener("keyup", (event) => {
    let nombreCard = event.target.value;
    let regExp = /[^a-zA-Z ]/g;

    if (regExp.test(nombreInputSelector.value)) {
        divErrorNombreSelector.innerHTML = "Formato incorrecto, solo letras.";
    } else {
        divErrorNombreSelector.textContent = "";
        if (nombreInputSelector.value.length >= 1 && nombreInputSelector.value.length <= 12) {
            nombreCardSelector.innerHTML = nombreCard.toUpperCase();
        } else if (nombreInputSelector.value.length > 12) {
            divErrorNombreSelector.innerHTML = "Limite de caracteres excedido.";
        } else if (nombreInputSelector.value == "") {
            nombreCardSelector.innerHTML = "DESTINATARIO";
        }
    }
})

// Input monto
let montoInputSelector = document.querySelector("#monto-js");
let montoCardSelector = document.querySelector(".tarjeta__precio-js");
let divErrorMontoSelector = document.querySelector("#error__monto-js")

montoInputSelector.addEventListener("keyup", (event) => {
    let montoCard = event.target.value;
    let regExp = /[^0-9]/g;

    if (regExp.test(montoInputSelector.value)) {
        divErrorMontoSelector.innerHTML = "Formato incorrecto, solo números.";
    } else {
        divErrorMontoSelector.textContent = "";
        if (montoInputSelector.value.length >= 1 && montoInputSelector.value.length <= 5) {
            montoCardSelector.innerHTML = montoCard;
        } else if (montoInputSelector.value.length > 5) {
            divErrorMontoSelector.innerHTML = "Limite de caracteres excedido.";
        } else if (montoInputSelector.value == "") {
            montoCardSelector.innerHTML = "00000";
        }
    }
})

// Input ubicacion
let ubicacionInputSelectores = document.querySelectorAll("input[name='ubicacion']");
let ubicacionClaseSelector = document.querySelector(".tarjeta__precio");

let ubicacionCard = () => {
    let ubicacion = document.querySelector("input[name='ubicacion']:checked").value;
    ubicacionClaseSelector.style.top = "revert";
    ubicacionClaseSelector.style.bottom = "revert";
    ubicacionClaseSelector.style.rigth = "revert";
    ubicacionClaseSelector.style.left = "revert";

    if (ubicacion == "abajoizquierda") {
        ubicacionClaseSelector.style.bottom = "0";
        ubicacionClaseSelector.style.left = "0";
    } else if (ubicacion == "arribaizquierda") {
        ubicacionClaseSelector.style.top = "0";
        ubicacionClaseSelector.style.left = "0";
    } else {
        ubicacionClaseSelector.style.bottom = "0";
        ubicacionClaseSelector.style.rigth = "0";
    }
}

ubicacionInputSelectores.forEach(ubicacionInputSelector => {
    ubicacionInputSelector.addEventListener("change", ubicacionCard);
});

// Input fondo
let fondoInputSelectores = document.querySelectorAll("input[name='fondo']");
let fondoClaseSelector = document.querySelector(".giftcard__tarjeta");

let fondoCard = () => {
    let color = document.querySelector("input[name='fondo']:checked").value;
    fondoClaseSelector.style.backgroundColor = color;
}
fondoInputSelectores.forEach(fondoInputSelector => {
    fondoInputSelector.addEventListener("change", fondoCard);
});

function closeModal() {
    nodo_cerrar_modal.addEventListener("click", () => {
        nodo_modal.close();
    });
}

// Form Gift-card
let buttonInputSelector = document.querySelector("#giftcard__button-js");
let formGifcard = document.querySelector("#form_giftcard-js");
let nodo_modal = document.querySelector("#modal");
let nodo_cerrar_modal = document.querySelector("#modal_cerrar");
function validateForm() {
    formGifcard.addEventListener("submit", (e) => {
        e.preventDefault();
        if (divErrorNombreSelector.textContent == "" && divErrorMontoSelector.textContent == "" &&
            montoInputSelector.value >= 10000
        ) {
            nodo_modal.showModal();
            document.querySelector(".modal_img").src = "../img/sign-check-icon_34365.ico";
            document.querySelector(".modal_text").textContent = "Verified";

            closeModal();
        } else {
            nodo_modal.showModal();
            document.querySelector(".modal_img").src = "../img/sign-error-icon_34362.ico";
            document.querySelector(".modal_text").textContent = "Error";
            closeModal();
        }
    });
}

menu();
validateForm();


