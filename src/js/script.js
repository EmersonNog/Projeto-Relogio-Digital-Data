function atualizandoTempo()
 {
     var display = document.querySelector(".display");
     var subDisplay = document.querySelector(".sub-display");
     
     var agora = new Date();
     var hoje = new Date();

     var horario = corrigindoHorario(agora.getHours()) + ':' + corrigindoHorario(agora.getMinutes()) + ':' + corrigindoHorario(agora.getSeconds());

     var data = corrigindoData(hoje.getDate()) + '/' + corrigindoData(hoje.getMonth() + 1) + '/' + corrigindoData(hoje.getFullYear());
     
     //jogando o horario/data atual para a tela do browser
     display.textContent = horario;
     subDisplay.textContent = data;
 }

function corrigindoHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero
}

function corrigindoData(numero) {
    if (numero <= 10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizandoTempo();
//recebe a função que vai receber a hora e os milissegundos que ira ficar atualizando
setInterval(atualizandoTempo, 1000);

console.log(horario)