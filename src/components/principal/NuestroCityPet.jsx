import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from 'react-icons/fa';
import foto1 from "../../assets/images/foto1.jpeg";
import foto2 from "../../assets/images/foto2.jpeg";
import foto3 from "../../assets/images/foto3.jpeg";
import foto4 from "../../assets/images/foto4.jpeg";
import foto5 from "../../assets/images/foto5.jpeg";
import foto6 from "../../assets/images/foto6.jpeg";

function NuestroCityPet() {
    const fotos = [
        { id: 1, imagen: foto1, alt: "CityPet Foto 1" },
        { id: 2, imagen: foto2, alt: "CityPet Foto 2" },
        { id: 3, imagen: foto3, alt: "CityPet Foto 3" },
        { id: 4, imagen: foto4, alt: "CityPet Foto 4" },
        { id: 5, imagen: foto5, alt: "CityPet Foto 5" },
        { id: 6, imagen: foto6, alt: "CityPet Foto 6" }
    ];

    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
    const [indiceActual, setIndiceActual] = useState(0);

    const abrirLightbox = (index) => {
        setFotoSeleccionada(fotos[index]);
        setIndiceActual(index);
    };

    const cerrarLightbox = () => {
        setFotoSeleccionada(null);
    };

    const siguienteFoto = () => {
        setIndiceActual((prev) => (prev + 1) % fotos.length);
        setFotoSeleccionada(fotos[(indiceActual + 1) % fotos.length]);
    };

    const fotoAnterior = () => {
        setIndiceActual((prev) => (prev - 1 + fotos.length) % fotos.length);
        setFotoSeleccionada(fotos[(indiceActual - 1 + fotos.length) % fotos.length]);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 px-6 bg-tercero-claro relative overflow-hidden" id="nuestro-citypet">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primero rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primero-oscuro mb-4">
                        Nuestro CityPet
                    </h2>
                    <p className="text-xl text-primero-claro max-w-2xl mx-auto">
                        Descubre el producto en acción y conoce cada detalle de CityPet
                    </p>
                </motion.div>

                {/* Galería de imágenes */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {fotos.map((foto, index) => (
                        <motion.div
                            key={foto.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            onClick={() => abrirLightbox(index)}
                            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 group"
                        >
                            <img
                                src={foto.imagen}
                                alt={foto.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    className="bg-segundo text-white rounded-full p-4"
                                >
                                    <FaChevronRight className="text-2xl" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            {fotoSeleccionada && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
                    onClick={cerrarLightbox}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-4xl w-full h-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Imagen grande */}
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={fotoSeleccionada.imagen}
                                alt={fotoSeleccionada.alt}
                                className="w-full h-auto object-cover max-h-[80vh]"
                            />
                        </div>

                        {/* Botón cerrar */}
                        <button
                            onClick={cerrarLightbox}
                            className="absolute top-4 right-4 bg-segundo text-white rounded-full p-3 hover:bg-segundo-oscuro transition-all shadow-lg"
                            aria-label="Cerrar"
                        >
                            <FaTimesCircle className="text-2xl" />
                        </button>

                        {/* Controles de navegación */}
                        <button
                            onClick={fotoAnterior}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-segundo text-white rounded-full p-3 hover:bg-segundo-oscuro transition-all shadow-lg"
                            aria-label="Foto anterior"
                        >
                            <FaChevronLeft className="text-2xl" />
                        </button>

                        <button
                            onClick={siguienteFoto}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-segundo text-white rounded-full p-3 hover:bg-segundo-oscuro transition-all shadow-lg"
                            aria-label="Siguiente foto"
                        >
                            <FaChevronRight className="text-2xl" />
                        </button>

                        {/* Contador */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                            {indiceActual + 1} / {fotos.length}
                        </div>
                    </motion.div>
                </motion.div>
            )}
           
        </section>
    );
}

export default NuestroCityPet;
