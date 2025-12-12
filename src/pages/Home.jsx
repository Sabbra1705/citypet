import Hero from '../components/principal/Hero.jsx';
import Header from '../components/principal/Header.jsx';
import Presentacion from '../components/principal/Presentación.jsx';
import Valores from '../components/principal/Valores.jsx';
import ManualDeUso from '../components/principal/ManualDeUso.jsx';
import NuestroCityPet from '../components/principal/NuestroCityPet.jsx';
import Beneficios from '../components/principal/Beneficios.jsx';
import ConoceNosotros from '../components/principal/ConoceNosotros.jsx';

export default function Home() {
  return (
    <div>
     <Header></Header>
      <Hero />
      <Presentacion></Presentacion>
      <Valores />
      <ManualDeUso />
      <NuestroCityPet />
      <Beneficios />
      <ConoceNosotros />
     
   </div>
  );
}
