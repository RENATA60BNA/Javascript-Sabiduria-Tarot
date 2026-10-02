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
  50000,
  "OnLine",
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

if (consultasRealizadas.length > 0) {
  const resumenFinal = crearResumen(
    nombre,
    cantidadConsultas,
    consultasRealizadas,
  );
  alert(resumenFinal);
  console.log(resumenFinal);
} else {
  alert(
    "Gracias por visitar Sabiduría Tarot.\n" +
      "Esperamos acompañarte en una próxima consulta.",
  );
}
//////////////-----OFERTA-------------------////////////////////////////////////////
alert(
  "Por ingresar a nuestra web, tenemos una oferta especial para vos.\n\n" +
    "30% de descuento en todas nuestras lecturas!!!!.\n\n" +
    "¡Solo por 24 horas!",
);

// propuesta
let quiereOferta = prompt(
  "¿Querés conocer las lecturas con descuento? Escribí SI o NO.",
).toLowerCase();

//  valido si escribe si o no

while (quiereOferta !== "si" && quiereOferta !== "no") {
  alert("Opción incorrecta. Escribí SI o NO.");
  console.log("Opción incorrecta en la consulta de la oferta.");

  quiereOferta = prompt(
    "¿Querés conocer las lecturas con descuento? Escribí SI o NO.",
  ).toLowerCase();
}
// si responde SI
if (quiereOferta === "si") {
  //declaro el descuento
  const descuento = 0.3;

  // map
  const lecturasConDescuento = lecturas.map((lectura) => {
    const precioConDescuento = lectura.precio * (1 - descuento);

    return {
      nombre: lectura.nombre,
      precioConDescuento: precioConDescuento,
    };
  });

  console.log(lecturasConDescuento);

  ////////////////////////////////////////////////////////////

  let mensajeOferta = "Estas son nuestras ofertas: \n\n";

  for (const lectura of lecturasConDescuento) {
    mensajeOferta +=
      lectura.nombre +
      " - Precio con 30% de descuento: $" +
      lectura.precioConDescuento +
      "\n";
  }
  alert(mensajeOferta);

  ///////////// PRESUPUESTO  /////////////////////////

  let presupuesto = parseInt(
    prompt("¿Cuánto estarías dispuesto a gastar en una lectura?"),
  );

  while (!(presupuesto > 0)) {
    alert("Opción incorrecta. Ingresá un importe utilizando números.");

    presupuesto = parseInt(
      prompt("Ingresá nuevamente el importe, solo con números."),
    );
  }

  // filtro
  const lecturasDisponibles = lecturasConDescuento.filter((lectura) => {
    return lectura.precioConDescuento <= presupuesto;
  });

  console.log("Lecturas disponibles según presupuesto:", lecturasDisponibles);

  const carrito = [];

  /////////////----PRESUPUESTO CASOS--------------///////////////////////
  // CASO 1:
  // presupuesto inferior
  if (lecturasDisponibles.length === 0) {
    const mensaje1 =
      "Por el momento no tenemos una lectura disponible dentro de ese presupuesto.\n\n" +
      "Gracias por visitar Sabiduría Tarot.\n" +
      "Esperamos acompañarte en una próxima consulta.";

    alert(mensaje1);
    console.log(mensaje1);

    // CASO 2:
    // presupuesto igual o mayor al precio de una lectura
  } else if (lecturasDisponibles.length === lecturasConDescuento.length) {
    let mensaje2 =
      "Con ese presupuesto podés elegir cualquiera de nuestras lecturas:\n\n";

    for (const lectura of lecturasDisponibles) {
      mensaje2 +=
        lectura.nombre +
        " - Precio con descuento: $" +
        lectura.precioConDescuento +
        "\n";
    }
    alert(mensaje2);

    // CASO 3:
    // si el presupuesto alcanza solo para algunas
  } else {
    let mensaje3 = "Con tu presupuesto podés acceder a:\n\n";

    for (const lectura of lecturasDisponibles) {
      mensaje3 +=
        lectura.nombre +
        " - Precio con descuento: $" +
        lectura.precioConDescuento +
        "\n";
    }
    alert(mensaje3);
  }
  // Si tiene al menos una lectura disponible, le ofrezco reservar
  if (lecturasDisponibles.length > 0) {
    //reserva lectura
    let opcionReserva = parseInt(
      prompt(
        "¿Te gustaría aprovechar esta oferta y reservar una lectura?\n\n" +
          "1. Reservar una lectura\n" +
          "2. Salir",
      ),
    );

    // valido que inhrese solo 1 o 2
    while (opcionReserva !== 1 && opcionReserva !== 2) {
      alert("Opción no válida. Ingresá 1 o 2.");

      opcionReserva = parseInt(
        prompt(
          "¿Te gustaría aprovechar esta oferta y reservar una lectura?\n\n" +
            "1. Reservar una lectura\n" +
            "2. Salir",
        ),
      );
    }

    //reserva

    switch (opcionReserva) {
      case 1:
        alert("Vamos a elegir la lectura que querés reservar.");

        // armo el menu con las lecturas según presupuesto
        let menuReserva = "Elegí la lectura que queres reservar:\n\n";
        let numeroLectura = 1;

        for (const lectura of lecturasDisponibles) {
          menuReserva +=
            numeroLectura +
            ". " +
            lectura.nombre +
            " - $" +
            lectura.precioConDescuento +
            "\n";

          numeroLectura++;
        }
        // oferta combo si hay mas de una lectura
        const descuentoCombo = 0.3;
        const porcentajeIVA = 0.21;

        let totalCombo = 0;
        let lecturasCombo = [];

        if (lecturasDisponibles.length > 1) {
          lecturasCombo = lecturasDisponibles.map((lectura) => {
            const precioCombo = Math.round(
              lectura.precioConDescuento * (1 - descuentoCombo),
            );

            const precioSinIVA = Math.round(precioCombo / (1 + porcentajeIVA));
            const iva = precioCombo - precioSinIVA;

            return {
              nombre: lectura.nombre,
              precioCombo: precioCombo,
              precioSinIVA: precioSinIVA,
              iva: iva,
            };
          });
          totalCombo = lecturasCombo.reduce((total, lectura) => {
            return total + lectura.precioCombo;
          }, 0);

          console.log("Total Combo:", totalCombo);

          menuReserva +=
            "\n" +
            numeroLectura +
            ". SUPER COMBO - Todas las lecturas por $" +
            totalCombo +
            " (30% de descuento adicional)\n";
        }

        // muestro el menú completo y guardo la opción elegida
        const opcionLectura = parseInt(prompt(menuReserva));

        console.log("Opción de lectura elegida: " + opcionLectura);

        if (opcionLectura >= 1 && opcionLectura <= lecturasDisponibles.length) {
          const posicion = opcionLectura - 1;

          carrito.push(lecturasDisponibles[posicion]);

          alert("Agregaste al carrito " + lecturasDisponibles[posicion].nombre);
        }

        // si elige el COMBO
        if (opcionLectura === numeroLectura && lecturasDisponibles.length > 1) {
          for (const lectura of lecturasCombo) {
            carrito.push(lectura);
          }
          alert("Agregaste el COMBO al carrito.");
        }
        console.log(carrito);
        let mensajeCarrito = "";

        if (opcionLectura === numeroLectura && lecturasDisponibles.length > 1) {
          mensajeCarrito = "COMBO seleccionado:\n\n";
        } else {
          mensajeCarrito = "Tu carrito contiene:\n\n";
        }

        //lectura individual

        for (const lectura of carrito) {
          const lecturaEncontrada = lecturas.find((lecturaOriginal) => {
            return lecturaOriginal.nombre === lectura.nombre;
          });
          console.log("Lectura encontrada:", lecturaEncontrada);

          if (
            opcionLectura === numeroLectura &&
            lecturasDisponibles.length > 1
          ) {
            mensajeCarrito +=
              lectura.nombre +
              "\nModalidad: " +
              lecturaEncontrada.modalidad +
              "\nPrecio final: $" +
              lectura.precioCombo +
              "\nPrecio sin IVA: $" +
              lectura.precioSinIVA +
              "\nIVA 21%: $" +
              lectura.iva +
              "\n\n";
          } else {
            const precioSinIVA = Math.round(
              lectura.precioConDescuento / (1 + porcentajeIVA),
            );

            const iva = lectura.precioConDescuento - precioSinIVA;

            mensajeCarrito +=
              lectura.nombre +
              "\nModalidad: " +
              lecturaEncontrada.modalidad +
              "\nPrecio final: $" +
              lectura.precioConDescuento +
              "\nPrecio sin IVA: $" +
              precioSinIVA +
              "\nIVA 21%: $" +
              iva +
              "\n\n";
          }
        }
        //total final
        if (opcionLectura === numeroLectura && lecturasDisponibles.length > 1) {
          mensajeCarrito += "\nTOTAL SUPER COMBO: $" + totalCombo;
        } else {
          mensajeCarrito +=
            "\nTOTAL LECTURA: $" + carrito[0].precioConDescuento;
        }
        console.log("Resumen Carrito", mensajeCarrito);
        alert(mensajeCarrito);

        break;

      // si no quiere

      case 2:
        alert(
          "Gracias por visitar Sabiduría Tarot.\n" +
            "Te esperamos en una próxima consulta.",
        );
        break;

      default:
        // si escribe una opción distinta de 1 o 2
        alert("Opción no válida. Ingresá 1 o 2.");
        break;
    }
  }
  // si responde NO a la oferta
} else {
  alert(
    "Gracias por visitar Sabiduría Tarot.\n" +
      "Te esperamos en una próxima consulta.",
  );
}
