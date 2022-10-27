//Escribir un algoritmo que indique si un número ingresado es par o impar. Investigar cómo obtener ese resultado.

// Para saber si un número es par o impar usamos el operador de módulo

var numero = parseInt(prompt("Ingresa un número"))

if(numero % 2 === 0) {
  console.log(numero + " es un número par")
} else {
  console.log(numero + " es un número impar")
}