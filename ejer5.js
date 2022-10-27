// Dada una variable de tipo string, determinar si esa palabra tiene mas de 10 caracteres o no. Investigar cómo obtener la cantidad de caracteres de un string.

// Para acceder a la longitud de un string usamos .length

var string = prompt("Ingresa un texto")

if(string.length > 10) {
  console.log(string + " tiene más de 10 caracteres")
} else {
  console.log(string + " tiene 10 o menos caracteres")
}