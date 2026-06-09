// simular el carrito de compras
// clase para manejar TODOS los libros
class Libro {
    constructor (titulo, precio) {
        this.titulo = titulo;
        this.precio = precio;
    }
    mostrarInfo() {
        return `Título: ${this.titulo}\nPrecio: ${this.precio}`;
    }
}
// FUNCION que se ejecutara al presionar el boton
function mostrardatos (boton) {
    // fila donde está el botón
    const fila = boton.closest('tr'); //fila donde está
    //obtenemos el titulo y precio de la fila
    const titulo = fila.querySelector('td:nth-child(2)').textContent;
    const precio = fila.querySelector('td:nth-child(3)').textContent;

    const libro = new Libro (titulo, precio);
    alert(libro.mostrarInfo());
}
// FUNCION para mostrar el formulario de contacto
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const tipo = document.getElementById("tipo").value;
    const consulta = document.getElementById("consulta").value;

    // VALIDACIONES
    if (correo === "") {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    if (tipo === "0") {
        alert("Por favor, seleccione un tipo.");
        return;
    }

    if (consulta === "") {
        alert("Por favor, ingresa tu consulta.");
        return;
    }

    // SI TODO ESTA BIEN
    alert(
        "Correo: " + correo + "\n" +
        "Tipo: " + tipo + "\n" +
        "Consulta: " + consulta
    );
});