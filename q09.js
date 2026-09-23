const senhaCorreta = "ifpb2026";
let tentativas = 0;
let senhaDigitada;

do {
    senhaDigitada = prompt("digite a senha: ");
    tentativas++;
} while (senhaDigitada !== senhaCorreta);

console.log("bem-vindo! você acertou");
console.log(`em ${tentativas} tentativa(s).`);