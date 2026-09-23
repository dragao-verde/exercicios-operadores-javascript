let turno = Number(prompt("escolha o turno: "));

switch (turno) {
    case 1:
        console.log("turno: Manhã");
        break;
    case 2:
        console.log("turno: Tarde");
        break;
    case 3:
        console.log("turno: Noite");
        break;
    default:
        console.log("turno inválido");
}