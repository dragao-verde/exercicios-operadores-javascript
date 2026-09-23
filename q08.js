let numero = Number(prompt("digite um número: "));

console.log(`tabuada do ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}