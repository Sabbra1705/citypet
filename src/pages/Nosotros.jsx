import Header from '../components/principal/Header.jsx';
import NuestroEquipo from '../components/principal/NuestroEquipo.jsx';
import AcercaDelProyecto from '../components/principal/AcercaDelProyecto.jsx';
import Agradecimientos from '../components/principal/Agradecimientos.jsx';

export default function Nosotros() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-primero-oscuro mb-6">Sobre Nosotros</h1>
        <p className="text-xl text-primero-claro max-w-3xl leading-relaxed">
          CityPet es un proyecto universitario innovador que propone un <span className="font-bold">sidecar clínico y ecológico</span> para el transporte seguro y cómodo de mascotas en entornos urbanos. Nuestro equipo de estudiantes de Diseño Industrial está comprometido con crear soluciones sostenibles que mejoren la calidad de vida de las personas y sus mascotas.
        </p>
      </main>
      <NuestroEquipo />
      <AcercaDelProyecto />
      <Agradecimientos />
    </div>
  );
}
