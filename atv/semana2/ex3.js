document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('verificar').addEventListener('click', verificarPalindromo);
});

function verificarPalindromo() {
        let texto = document.getElementById("fraseInput").value;

        if(texto != "") {
            let textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
            if(textoLimpo === textoLimpo.split('').reverse().join('')){
                alert("A palavra/frase é um palíndromo!");
            } else {
                alert("A palavra/frase não é um palíndromo.");
            }
        }
        else {
            alert("Por favor, insira uma palavra/frase.");
        }
    }