//mensaje inicial 1

const nombre = prompt("Ingresá tu nombre");
let opcion = "";
let cantidadConsultas = 0;

//Saludo 2

alert("Hola " + nombre + ". Te damos la bienvenida a Sabiduría Tarot.");

//tipos de lecturas

function recomendarLectura(opcionElegida) {
  let mensaje = "";

  switch (opcionElegida) {
    case "1":
      mensaje = "Te recomendamos la Lectura de Relaciones";
      break;
    case "2":
      mensaje = "Te recomendamos la Lectura General";
      break;
    case "3":
      mensaje = "Te recomendamos la Lectura Evolutiva";
      break;
    default:
      mensaje = "La opción es incorrecta. Ingresá un número del 1 al 3.";
  }

  return mensaje;
}

// precio lecturas
function consultarPrecio(opcionElegida) {
  let precio = "";

  switch (opcionElegida) {
    case "1":
      precio = "El valor de la Lectura de relaciones es $30.000.";
      break;
    case "2":
      precio = "El valor de la Lectura General es $50.000.";
      break;
    case "3":
      precio = "El valor de la Lectura Evolutiva es $35.000.";
      break;
  }
  return precio;
}
//opciones para elegir
do {
  opcion = prompt(
    "Elegí una opción\n" +
      "1. Comprender una relación\n" +
      "2. Obtener una mirada General\n" +
      "3. Comprender un aprendizaje personal\n" +
      "Escribí SALIR para finalizar",
  ).toLowerCase();

  switch (opcion) {
    case "1":
    case "2":
    case "3":
      const recomendacion = recomendarLectura(opcion);

      alert(recomendacion);
      console.log(recomendacion);

      cantidadConsultas++;

      // consulta de precio
      let quierePrecio = prompt(
        "¿Querés consultar el precio de esta lectura? Escribí SI o NO.",
      ).toLowerCase();

      while (quierePrecio !== "si" && quierePrecio !== "no") {
        alert("Opción incorrecta. Escribí SI o NO.");
        console.log("Opción incorrecta en la consulta de precio.");

        quierePrecio = prompt(
          "¿Querés consultar el precio de esta lectura? Escribí SI o NO.",
        ).toLowerCase();
      }

      if (quierePrecio === "si") {
        const precio = consultarPrecio(opcion);
        alert(precio);
        console.log(precio);
      }
      break;

    case "salir":
      break;

    default:
      alert("Opción incorrecta. Ingresá un número del 1 al 3 o escribí SALIR.");
      console.log("Opción incorrecta ingresada por el usuario.");
  }
} while (opcion !== "salir");

const crearResumen = (nombreUsuario, cantidad) => {
  return (
    "Gracias, " +
    nombreUsuario +
    ". Cantidad de orientaciones consultadas: " +
    cantidad +
    "."
  );
};
const resumenFinal = crearResumen(nombre, cantidadConsultas);

alert(resumenFinal);

console.log(resumenFinal);
