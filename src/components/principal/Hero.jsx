import { motion } from 'framer-motion';
import { FaArrowDown, FaImage } from 'react-icons/fa';
import render from "../../assets/images/render11.png"

export default function Hero() {
  return (
    <section className="bg-tercero-oscuro min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primero-oscuro">
            CityPet
            <span className="block text-primero">
              Movilidad urbana segura para mascotas
            </span>
          </h1>

          <p className="mt-4 text-xl text-primero-claro leading-relaxed">
            Un sidecar clínico y ecológico para trasladar mascotas con seguridad y confort.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#presentacion"
              className="bg-segundo text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-segundo-oscuro transition flex items-center gap-2"
            >
              Ver propuesta
            </a>
            <a
              href="#nuestro-citypet"
              className="border-2 border-primero px-6 py-3 rounded-xl font-medium text-primero hover:bg-primero hover:text-white transition flex items-center gap-2"
            >
              <FaImage /> Ver imágenes
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img src={render} alt="Render CityPet" className="w-full  drop-shadow-xl rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
