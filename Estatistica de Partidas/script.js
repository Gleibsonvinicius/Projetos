document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const jogos = parseInt(document.getElementById('jogos').value);
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const empates = parseInt(document.getElementById('empates').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const golsFeitos = parseInt(document.getElementById('golsFeitos').value);
    const golsSofridos = parseInt(document.getElementById('golsSofridos').value);

   
    const diferencaGols = golsFeitos - golsSofridos;

   
    const porcentagemVitorias = jogos > 0 ? (vitorias / jogos) * 100 : 0;

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p> Jogos : ${jogos}</p>
        <p> Vitórias: ${vitorias}</p>
        <p> Empates: ${empates}</p>
        <p> Derrotas: ${derrotas}</p>
        <p> SG : ${diferencaGols}</p>
        <p>Porcentagem de vitórias: ${porcentagemVitorias.toFixed(2)}%</p>
    `;
});
