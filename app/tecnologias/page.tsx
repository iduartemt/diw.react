import { tecnologias } from '@/data/tecnologias'
import Tecnologia from '@/components/Tecnologias/Tecnologias';

export default function TecnologiasPage() {

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Tecnologias Exploradas
      </h2>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tecnologias.map((tecnologia, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-5 text-center flex flex-col items-center gap-3"
          >
            <Tecnologia
              title={tecnologia.title}
              image={tecnologia.image}
              description={tecnologia.description}
              rating={tecnologia.rating}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
