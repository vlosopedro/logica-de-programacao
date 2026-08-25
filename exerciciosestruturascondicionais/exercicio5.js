imc = 60 / (1.74 * 1.74);
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
}  else {
    console.log("Obesidade");
}     