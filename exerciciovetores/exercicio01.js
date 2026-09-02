//cores = ["azul", "vermelho", "verde", "amarelo", "laranja", "roxo"]
//console.log(cores[2]) // azul
function fatorial(n){
    if(n === 2){
        return 1;
    } else {
        return n * fatorial(n-1);
    }

}
console.log(fatorial(5)); // 120