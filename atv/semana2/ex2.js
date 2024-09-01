document.addEventListener("DOMContentLoaded", function () {
    atualizaHora();
});

function atualizaHora(){
    let data = new Date();
    let format = {hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let dataFormatada = data.toLocaleTimeString('pt-BR', format);
    document.getElementById("hora_atual").textContent = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    setTimeout(atualizaHora, 1000); // Executa a função a cada segundo
}