
// respostas certas
const respostas = {
  q1: "b",
  q2: "c",
  q3: "c",
  q4: "b",
  q5: "d",
  q6: "b",
  q7: "c",
  q8: "c",
  q9: "a",
  q10: "b",
};

// funcao que roda quando clica em verificar
function verificar(e) {
  e.preventDefault(); // pra nao recarregar a pagina

  let acertos = 0; // contador de acertos

  // laço pra verificar cada pergunta de 1 a 10
  for (let i = 1; i <= 10; i++) {
    const nome = "q" + i;

    // pega o radio que esta marcado
    const marcada = document.querySelector(
      'input[name="' + nome + '"]:checked'
    );

    // pega o card da pergunta
    const card = document.querySelector(
      'input[name="' + nome + '"]'
    ).closest(".card");

    // se nenhuma alternativa foi marcada
    if (!marcada) {
      card.style.borderLeft = "4px solid #8b1a1a";
    }

    // verifica se a resposta esta certa
    else if (marcada.value === respostas[nome]) {
      acertos++;
      card.style.borderLeft = "4px solid #4a7c4a";
    }

    // se a resposta estiver errada
    else {
      card.style.borderLeft = "4px solid #8b1a1a";
    }
  }

  // mostra o resultado no final
  const div = document.getElementById("resultado");

  div.innerHTML =
    "<h2>Resultado</h2><p>Você acertou " + acertos + " de 10.</p>";

  // se acertou 7 ou mais, verde. se nao, vermelho
  if (acertos >= 7) {
    div.style.borderLeft = "4px solid #4a7c4a";
  } else {
    div.style.borderLeft = "4px solid #8b1a1a";
  }

  // rola ate o resultado
  div.scrollIntoView({ behavior: "smooth" });
}
