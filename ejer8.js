//Dadas dos variables numéricas x e y ingresadas por el usuario que correspondan a un punto en el plano, escribir un algoritmo que determine por consola en qué cuadrante se encuenta: 1er, 2do, 3er o 4to

var x = parseInt(prompt("Ingresa la posición X"))
var y = parseInt(prompt("Ingresa la posición Y"))

if( x > 0 && y > 0) {
  console.log("El cuadrante es el primero")
} else if ( x > 0 && y < 0) {
  console.log("El cuadrante es el cuarto")
} else if ( x < 0 && y < 0) {
  console.log("El cuadrante es el tercero")
} else if( x < 0 && y > 0) {
  console.log("El cuadrante es el segundo")
} else {
  console.log("El punto está en el medio")
}