import React, { useState, useEffect } from "react";

function Letreiro() {
  const [texto, setTexto] = useState(""); // Armazena o texto atual que será exibido
  const mensagem = "Venha estudar na Fatec"; // Mensagem completa que será exibida
  const intervalo = 150; // Intervalo em milissegundos para a digitação das letras

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTexto((prev) => prev + mensagem[index]); // Adiciona letra por letra
      index++;
      if (index === mensagem.length) {
        clearInterval(timer); // Limpa o intervalo quando a mensagem estiver completa
      }
    }, intervalo);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div>
      <h1>{texto}</h1> {/* Exibe o texto que está sendo digitado */}
    </div>
  );
}

export default Letreiro;
