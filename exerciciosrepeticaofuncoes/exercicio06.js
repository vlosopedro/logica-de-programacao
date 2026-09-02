function contarVogais(palavra) {
    let contador = 0;
    // i é uma variavel (indice)  
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    return contador;
}  console.log(contarVogais("pneumoultramicroscopicosilicovulcanoconiótico"));