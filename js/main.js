const nombre = prompt("Ingresá tu nombre");
let opcion = "";
let cantidadConsultas = 0;
const consultasRealizadas = [];

class Lectura {
  constructor(orientacion, nombre, precio, modalidad) {
    this.orientacion = orientacion;
    this.nombre = nombre;
    this.precio = precio;
    this.modalidad = modalidad;
  }

  // Calcular y mostrar el precio sin impuestos y el IVA.
  verImpuestos() {
    const precioSinImpuestos = this.precio / 1.21;
    const impuesto = this.precio - precioSinImpuestos;

    alert(
      "Lectura: " +
        this.nombre +
        "\n" +
        "Precio sin impuestos: $" +
        precioSinImpuestos.toFixed(2) +
        "\n" +
        "IVA 21%: $" +
        impuesto.toFixed(2) +
        "\n" +
        "Precio final: $" +
        this.precio,
    );

    console.log("Precio sin impuestos: $" + precioSinImpuestos.toFixed(2));
    console.log("Impuestos: $" + impuesto.toFixed(2));
    console.log("Precio final: $" + this.precio);
  }
}
// Datos de cada lectura

const lecturaRelaciones = new Lectura(
  "Comprender una relación",
  "Lectura de Relaciones",
  5000,
  "On Line",
);

const lecturaEvolutiva = new Lectura(
  "Comprender un aprendizaje personal",
  "Lectura Evolutiva",
  35000,
  "Online",
);

const lecturaGeneral = new Lectura(
  "Obtener una mirada General",
  "Lectura General",
  50000,
  "Online",
);
const lecturaExperimental = new Lectura(
  "Probar una nueva orientación",
  "Consulta Experimental",
  20000,
  "Online",
);

const lecturaTransgeneracional = new Lectura(
  "Comprender patrones familiares",
  "Lectura Transgeneracional",
  40000,
  "Online",
);

// creo un array de lecturas
const lecturas = [lecturaRelaciones, lecturaGeneral, lecturaEvolutiva];

// agrego una lectura al inicio
lecturas.unshift(lecturaExperimental);

//agrego lectura al final
lecturas.push(lecturaTransgeneracional);

// verifico si esta la lectura de relaciones
console.log(lecturas.includes(lecturaRelaciones));

// Elimino la lectura Experimental
lecturas.shift();

for (const lectura of lecturas) {
  console.log("Nombre: " + lectura.nombre);
  console.log("Orientación: " + lectura.orientacion);
  console.log("Precio: $" + lectura.precio);
  console.log("Modalidad: " + lectura.modalidad);
  console.log("--------------------");
}

//Saludo
alert("Hola " + nombre + ". Te damos la bienvenida a Sabiduría Tarot.");

//opciones para elegir
do {
  let menu = "Elegí una opción\n";
  let numero = 1;

  //recorro cada lectura del array y agrego al menú el número y su orientación (en una nueva línea)

  for (const lectura of lecturas) {
    menu += numero + ". " + lectura.orientacion + "\n";
    numero++;
  }

  menu += "Escribí SALIR para finalizar";
  opcion = prompt(menu).toLowerCase();

  switch (opcion) {
    case "salir":
      break;

    default:
      const posicion = parseInt(opcion) - 1;

      if (posicion >= 0 && posicion < lecturas.length) {
        const lecturaElegida = lecturas[posicion];

        alert("Te recomendamos la " + lecturaElegida.nombre);

        cantidadConsultas++;

        //si en el array consultasRealizadas todavia no contiene el l.e. se agrega]
        if (!consultasRealizadas.includes(lecturaElegida))
          consultasRealizadas.push(lecturaElegida);

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
          lecturaElegida.verImpuestos();
        }
      } else {
        alert(
          "Opción incorrecta. Ingresá un número del 1 al " +
            lecturas.length +
            " o escribí SALIR.",
        );

        console.log("Opción incorrecta ingresada por el usuario.");
      }
  }
  // le digo que repita hasta obtener salir
} while (opcion !== "salir");

//armo resumen

const crearResumen = (nombreUsuario, cantidad, consultas) => {
  let resumen = "Gracias, " + nombreUsuario + ".\n\n";

  resumen += "Cantidad de consultas realizadas: " + cantidad + "\n\n";

  for (const lectura of consultas) {
    resumen +=
      "Lectura: " +
      lectura.nombre +
      "\n" +
      "Orientación: " +
      lectura.orientacion +
      "\n" +
      "Precio: $" +
      lectura.precio +
      "\n" +
      "Modalidad: " +
      lectura.modalidad +
      "\n\n";
  }
  return resumen;
};

const resumenFinal = crearResumen(
  nombre,
  cantidadConsultas,
  consultasRealizadas,
);
alert(resumenFinal);
console.log(resumenFinal);
