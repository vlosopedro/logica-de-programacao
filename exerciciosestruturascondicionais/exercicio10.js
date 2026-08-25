saldo = 500;
saque = 80;

if (saque > 0 && saque <= saldo && saque % 10 === 0) {
    
    saldo = saldo - saque;
    
    console.log("Saque de R$ " + saque + " realizado com sucesso! Saldo restante: R$ " + saldo);
} else {
    
    console.log("Operação cancelada. Verifique o valor do saque e seu saldo.");
}
