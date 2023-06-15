let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");

if (num1 > num2) {
  console.log("El mayor número es: " + num1);
} else if (num2 > num1) {
  console.log("El mayor número es: " + num2);
} else {
  console.log("Los números son iguales.");
}