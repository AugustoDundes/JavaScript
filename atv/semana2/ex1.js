document.addEventListener("DOMContentLoaded", function() {
    let data = new Date();
    let format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dataFormatada = data.toLocaleDateString('pt-BR', format);
    document.getElementById("hora_atual").textContent = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)
});
