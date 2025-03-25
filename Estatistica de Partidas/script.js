document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar dados do formulário
    const jogos = parseInt(document.getElementById('jogos').value);
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const empates = parseInt(document.getElementById('empates').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const golsFeitos = parseInt(document.getElementById('golsFeitos').value);
    const golsSofridos = parseInt(document.getElementById('golsSofridos').value);

    // Calcular a diferença de gols
    const diferencaGols = golsFeitos - golsSofridos;

    // Calcular a porcentagem de vitórias
    const porcentagemVitorias = jogos > 0 ? (vitorias / jogos) * 100 : 0;

    // Exibir os resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Número total de jogos : ${jogos}</p>
        <p>Número de vitórias: ${vitorias}</p>
        <p>Número de empates: ${empates}</p>
        <p>Número de derrotas: ${derrotas}</p>
        <p>Diferença de gols : ${diferencaGols}</p>
        <p>Porcentagem de vitórias: ${porcentagemVitorias.toFixed(2)}%</p>
    `;
});