// desplazar imagenes
let j = 0;

function carrusel2() {
    // aplica un estilo para desplazar las imagenes
    document.getElementById("slides").style.transform = 
        `translateX(-${j * 100}%)`;
    j += 1; // j++;
    if (j >= 5) {
       j = 0;
    }
    setTimeout(carrusel2, 2000);
}
carrusel2();