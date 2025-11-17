import Image from 'next/image';
import tecnologiasJson from '@/app/data/tecnologias.json';

export default function TecnologiasPage() {
const tecnologias = JSON.parse(JSON.stringify(tecnologiasJson)) as {
  title: string;
  image: string;
  description: string;
  rating: number;
}[];

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Tecnologias Exploradas
      </h2>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tecnologias.map((tec, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-5 text-center flex flex-col items-center gap-3 a"
          >
            <Image
              src="/tecnologias/globe.svg"
              alt="Logotipo do React"
              width={200}
              height={200}
            />

            <h3 className="text-xl font-semibold">{tec.title}</h3>

            <p className="text-gray-600 text-sm">{tec.description}</p>

            <p className="font-medium">
              Rating: <span className="text-blue-600">{tec.rating}</span>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
