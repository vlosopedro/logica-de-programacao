
console.log(linha)
function desenharQuadrado(n) {
    for (let i = 0; i < n; i++) {
        let linha = ""; 
        for (let j = 0; j < n; j++) {
            linha += "*";
        }
        console.log(linha);
    }
}

desenharQuadrado(3)

