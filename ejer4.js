// Dadas dos variables numéricas ingresadas por el usuario: numero1 y numero2, determinar si el segundo número es múltiplo del primero.

var numero1 = parseInt(prompt("Ingresa un numero"))
var numero2 = parseInt(prompt("Ingresa un numero"))

if(numero2 % numero === 0) {
  console.log(numero2 + " sí es múltiplo de " + numero1)
} else {
  console.log(numero2 + " no es múltiplo de " + numero1)
}