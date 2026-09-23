let n = Number(prompt("digite um número N: "));

let pares = 0;
let impares = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - par`);
        pares++;
    } else {
        console.log(`${i} - ímpar`);
        impares++;
    }
}

console.log("--------------------");
console.log(`pares: ${pares}`);
console.log(`impares: ${impares}`);