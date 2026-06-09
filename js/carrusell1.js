// cambiar la imagen con id="banner" cada segundo
let i = 1 // control de las imágenes

function carrusel(){
    // cambiar la ruta de la imagen a mostrar segun la variable
    document.getElementById('banner').src = `./img/banner${i}.jpg`;
    i += 1; // incrementa el valor de control
    if (i > 5) {
        i = 1 ; // reinicia el valor de control de imágenes
    }
    // pausa de 1s o 1000ms para llamar
    setTimeout(carrusel, 2000); // vuelve a llamar después de 1s
}

//activar funcion
carrusel();