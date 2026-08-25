a = 2;
b = 5;
c = 5;


if ((a + b > c) && (a + c > b) && (b + c > a)) {
    
  
    if (a === b && b === c) {
        classificacao = "Equilátero";
    } else if (a === b || a === c || b === c) {
        classificacao = "Isósceles";
    } else {
        classificacao = "Escaleno";
    }
    
    console.log("Os lados formam um triângulo " + classificacao + ".");

} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
