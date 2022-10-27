// Escribir un algoritmo que reciba un dato de tipo numérico que refiera a la edad de una persona e indique por consola si esta tiene edad para votar.

var edad = parseInt(prompt("Ingresa tu edad"))

if(edad >= 16) {
  console.log("Podes votar")
} else {
  console.log("Todavia no podes votar")
}