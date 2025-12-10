import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

const a = 10;
const b = 0;

console.log("Suma:", sumar(a, b));
console.log("Resta:", restar(a, b));
console.log("Multiplicación:", multiplicar(a, b));

try {
    console.log("División:", dividir(a, b));
} catch (error) {
    console.log("Error en división:", error.message);
}