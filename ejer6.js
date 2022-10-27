// Escribir un algoritmo que reciba un número. En función del número ingresado, mostrar en consola el día de la semana al que corresponda.

var diaSemana = parseInt(prompt("Ingresa un número"))

if(diaSemana === 1) {
  console.log("Lunes")
} else if(diaSemana === 2) {
  console.log("Martes")
} else if(diaSemana === 3) {
  console.log("Miércoles")
} else if(diaSemana === 4) {
  console.log("Jueves")
} else if(diaSemana === 5) {
  console.log("Viernes")
} else if(diaSemana === 6) {
  console.log("Sábado")
} else if(diaSemana === 7) {
  console.log("Domingo")
} else {
  console.log("El número no corresponde a ningún día")
}