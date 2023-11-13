let boton = document.getElementById("escondeMuestra");
let foto = document.getElementById("tomando");
let send = document.getElementById("enviar");
let primera = document.getElementById("primera");
let darthMesaje = document.getElementById("segunda");

// boton.addEventListener("click", function () {
//     foto.classList.toggle("esconde");
// })


send.addEventListener("click", function () {

    primera.classList.toggle("esconde");
    darthMesaje.classList.toggle("esconde");
})
