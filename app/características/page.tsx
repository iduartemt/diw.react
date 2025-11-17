import react from 'react';

const caracteristicas = [
    "Rápido desempenho",
    "Interface moderna",
    "Altamente personalizável",
    "Código open-source",
    "Suporte a múltiplas plataformas"
];

<h2 onClick={handleClick}>Características do React e Next.js</h2>

{ caracteristicas .map((caracteristica, i) => {
    return <li key={i}>caracteristica</li>
})}

function handleClick() {
    alert("Você clicou no título!");
  }