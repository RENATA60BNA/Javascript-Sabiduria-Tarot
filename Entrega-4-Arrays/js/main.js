//orientaciones
const orientaciones = [
  "Relaciones",
  "Mirada general de una situación",
  "Aprendizaje personal",
  "Objetivos personales",
  "Cambios",
];

// agrego orientacion al inicio
orientaciones.unshift("Consulta experimental");

// correccion elimino la ultima orientacion
const orientacionEliminada = orientaciones.pop();
console.log("Se elimino el elemento:" + orientacionEliminada);

//agrego nueva orientacion al final
orientaciones.push("Lectura Transgeneracional");

//valido si la orient. esta disponible
console.log(orientaciones.includes("Relaciones"));

// pregunto el indice
console.log(orientaciones.indexOf("Relaciones"));

//reemplazo la ultima orientacion
orientaciones.splice(3, 1, "Objetivos y desarrollo personal");

//elimino la priemra orientacion
orientaciones.shift();

function mostrarOrientaciones() {
  for (const orientacion of orientaciones) {
    console.log(orientacion);
  }
}
mostrarOrientaciones();

// mostramos con la separacion
alert(orientaciones.join("\n"));
