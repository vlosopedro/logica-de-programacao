a = 15;
b = 5;
c = 27;


if (a >= b && a >= c) {
    maior = a;
} else if (b >= a && b >= c) {
    maior = b;
} else {
    maior = c;
}
console.log("Maior: " + maior);

if (a <= b && a <= c) {
    menor = a;
} else if (b <= a && b <= c) {
    menor = b;
} else {
    menor = c;
}
console.log("Menor: " + menor);

