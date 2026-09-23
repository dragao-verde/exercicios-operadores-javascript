let itens = 47;
let itensporcaixa = 6;
let dimensao = 4;

let posicoes_disponiveis = dimensao ** 3;

let caixas_completas = Math.floor(itens / itensporcaixa);
let itens_restantes = itens % itensporcaixa;

console.log("Caixas completas: " + caixas_completas);
console.log("Itens restantes: " + itens_restantes);
console.log("Posições disponíveis: " + posicoes_disponiveis);