function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

console.log(
  "-------------- Testeo de Operaciones / Calculadora --------------"
);
console.log("La suma de 7 y 5 es: " + sumar(7, 5));
console.log("La resta de 7 y 5 es: " + restar(7, 5));
console.log("La multiplicación de 7 y 5 es: " + multiplicar(7, 5));
console.log("La división de 7 por 5 es: " + dividir(7, 5));

function cuadradoDeUnNumero(numero) {
  return multiplicar(numero, numero);
}

console.log("El cuadrado de 7 es: " + cuadradoDeUnNumero(7));

function promedioDeTresNumeros(numero1, numero2, numero3) {
  return sumar(numero1, sumar(numero2, numero3)) / 3;
}

console.log("El promedio de 7, 4 y 1 es: " + promedioDeTresNumeros(7, 4, 1));

function calcularPorcentaje(numeroTotal, numeroPorcentaje) {
  return dividir(multiplicar(numeroTotal, numeroPorcentaje), 100);
}

console.log("El 15% de 300 es: " + calcularPorcentaje(300, 15));

function generadorDePorcentaje(numero1, numero2){
    return dividir(multiplicar(numero1,100),numero2);
};

console.log("2 es el " + generadorDePorcentaje(2,200) +"% de 200");