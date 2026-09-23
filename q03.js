let valorVendido = Number(prompt("Valor vendido: "));
let meta = Number(prompt("Meta do mês: "));

console.log(`Vendido: ${valorVendido} | Meta: ${meta}`);

if (valorVendido > meta) {
    console.log("Atingiu a meta? true");
    console.log("Superou a meta? true");
    console.log("Bateu exatamente? false");
} else if (valorVendido === meta) {
    console.log("Atingiu a meta? true");
    console.log("Superou a meta? false");
    console.log("Bateu exatamente? true");
} else {
    console.log("Atingiu a meta? false");
    console.log("Superou a meta? false");
    console.log("Bateu exatamente? false");
}

console.log("Diferença: " + Math.abs(valorVendido - meta));