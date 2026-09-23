let valorCompra = Number(prompt("Digite o valor da compra: "));

console.log(`compra: R$ ${valorCompra} | ${valorCompra >= 150 ? "frete grátis" : "frete: R$ 20,00"}`);