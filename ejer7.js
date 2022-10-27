// Dadas dos variables numéricas: diaDeNavidad y mesDeNavidad ingresadas por el usuario, escribir un algoritmo que determine si estos datos corresponden a la fecha de navidad. Utilizar operación de comparación &&.

var diaDeNavidad = parseInt(prompt("Ingresa la fecha"))

var mesDeNavidad = parseInt(prompt("Ingresa el mes"))

if(diaDeNavidad === 25 && mesDeNavidad === 12) {
  console.log("La fecha corresponde a navidad")
} else {
  console.log("La fecha no corresponde a navidad")
}