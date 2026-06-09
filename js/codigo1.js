// mostrar el nombre ingresado en el contenido del h2
// importante el h2 debe tener un "id" ojo AltGr + }
// document.getElementById('usuario').textContent = `Bienvenido ${nombre}`;

let nombre = prompt('Ingrese nombre :');
let mensaje;

if (nombre === null || nombre === "") {
    mensaje = 'Bienvenido, invitado';
} else {
    mensaje = `Bienvenido, ${nombre}`;
}

document.getElementById('usuario').textContent = mensaje;


// segunda manera
// if (nombre.length != 0) {
//     document.getElementById('usuario').textContent = `Bienvenido ${nombre}` ;
// } else {
//     document.getElementById('usuario').textContent = `Bienvenido ${invitado}`;
// }