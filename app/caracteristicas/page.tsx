const caracteristicas = [
    "Rápido desempenho",
    "Interface moderna",
    "Altamente personalizável",
    "Código open-source",
    "Suporte a múltiplas plataformas"
];

export default function CaracteristicasPage() {
    return (
        <>
            <h2>Características do React e Next.js</h2>

            {caracteristicas.map((caracteristica, i) => {
                return <li key={i}>caracteristica</li>
            })}
        </>
    )
}
