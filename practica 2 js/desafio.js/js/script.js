function cambiarEstilo(estilo) {

    let frase = document.getElementById("frase");

    frase.classList.remove("estilo1");
    frase.classList.remove("estilo2");
    frase.classList.remove("estilo3");


    if (estilo === 1) {
        frase.classList.add("estilo1");
    }

    if (estilo === 2) {
        frase.classList.add("estilo2");
    }

    if (estilo === 3) {
        frase.classList.add("estilo3");
    }
}
