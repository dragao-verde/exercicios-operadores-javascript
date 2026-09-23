let temperatura = Number(prompt("temperatura ambiente: "));

if (temperatura < 15) {
    console.log(`${temperatura} graus - clima: Fria`);
} else if (temperatura <= 25) {
    console.log(`${temperatura} graus - clima: Amena`);
} else {
    console.log(`${temperatura} graus - clima: Quente`);
}