

function desenharQuadrado(n) {
    let linha = "";

    for (let j = 0; j < n; j++) {
        linha += "+".repeat(n);
        linha += "\n";
    }
    console.log(linha);
}

desenharQuadrado(3)

