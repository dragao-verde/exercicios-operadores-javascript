let idade = 20;
let possuiConvite = false;

if (idade >= 18 && possuiConvite === true) {
    console.log("entrada permitida.");
} else {
    console.log("rntrada negada.");

    if (idade < 18) {
        console.log("motivo: menor de idade.");
    }
    if (possuiConvite === false) {
        console.log("motivo: não possui convite.");
    }
}