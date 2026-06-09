//leer la edad y si es menor de 18, muestra un mensaje y direciona
let edad = prompt(`${nombre} Ingrese tu edad:`);

if (edad < 18) {
    alert("Ud. es menor de edad, y no debe ingresar");
    window.location.replace("http://www.google.com");
}
