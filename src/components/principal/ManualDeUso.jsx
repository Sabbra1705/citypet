import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import manual1 from "../../assets/images/manual-de-uso1.png";
import manual2 from "../../assets/images/manual-de-uso2.png";
import manual3 from "../../assets/images/manual-de-uso3.png";
import manual4 from "../../assets/images/manual-de-uso4.png";
import manual5 from "../../assets/images/manual-de-uso5.png";
import manual6 from "../../assets/images/manual-de-uso6.png";

function ManualDeUso() {
    const pasos = [
        {
            numero: 1,
            imagen: manual1,
            titulo: "Paso 1",
            descripcion: "Instalación inicial"
        },
        {
            numero: 2,
            imagen: manual2,
            titulo: "Paso 2",
            descripcion: "Preparación del sidecar"
        },
        {
            numero: 3,
            imagen: manual3,
            titulo: "Paso 3",
            descripcion: "Insertar mascota"
        },
        {
            numero: 4,
            imagen: manual4,
            titulo: "Paso 4",
            descripcion: "Asegurar correctamente"
        },
        {
            numero: 5,
            imagen: manual5,
            titulo: "Paso 5",
            descripcion: "Verificación de seguridad"
        },
        {
            numero: 6,
            imagen: manual6,
            titulo: "Paso 6",
            descripcion: "¡Listo para viajar!"
        }
    ];

    const [pasoActual, setPasoActual] = useState(0);

    const siguiente = () => {
        setPasoActual((prev) => (prev + 1) % pasos.length);
    };

    const anterior = () => {
        setPasoActual((prev) => (prev - 1 + pasos.length) % pasos.length);
    };

    return (
        <section className="bg-tercero-oscuro py-20 px-6 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primero rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primero-oscuro mb-4">
                        Manual de Uso
                    </h2>
                    <p className="text-xl text-primero-claro max-w-2xl mx-auto">
                        Sigue estos sencillos pasos para disfrutar de CityPet con tu mascota
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Contenedor de imagen */}
                    <div className="relative bg-tercero-oscuro h-96 md:h-[600px] flex items-center justify-center overflow-hidden">
                        <motion.img
                            key={pasoActual}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            src={pasos[pasoActual].imagen}
                            alt={pasos[pasoActual].titulo}
                            className="w-full h-full object-contain"
                        />
                        
                        {/* Número de paso */}
                        <div className="absolute top-4 right-4 bg-segundo text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
                            {pasos[pasoActual].numero}/{pasos.length}
                        </div>
                    </div>

                    {/* Información del paso */}
                    <div className="p-8 md:p-10">
                        <motion.div
                            key={pasoActual}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-bold text-primero">
                                {pasos[pasoActual].titulo}
                            </h3>
                        </motion.div>

                        {/* Controles */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={anterior}
                                className="bg-primero text-white p-3 rounded-full hover:bg-primero-oscuro transition-all shadow-md hover:shadow-lg"
                                aria-label="Paso anterior"
                            >
                                <FaChevronLeft className="text-2xl" />
                            </button>

                            {/* Indicadores de progreso */}
                            <div className="flex gap-2">
                                {pasos.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setPasoActual(index)}
                                        className={`h-3 rounded-full transition-all ${
                                            index === pasoActual
                                                ? "bg-segundo w-8"
                                                : "bg-primero-claro w-3 hover:bg-primero"
                                        }`}
                                        whileHover={{ scale: 1.2 }}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={siguiente}
                                className="bg-primero text-white p-3 rounded-full hover:bg-primero-oscuro transition-all shadow-md hover:shadow-lg"
                                aria-label="Siguiente paso"
                            >
                                <FaChevronRight className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Vista en cuadrícula de todos los pasos (en pantallas grandes) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 hidden lg:grid lg:grid-cols-6 gap-4"
                >
                    {pasos.map((paso, index) => (
                        <button
                            key={paso.numero}
                            onClick={() => setPasoActual(index)}
                            className={`relative rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl ${
                                index === pasoActual ? "ring-4 ring-segundo" : ""
                            }`}
                        >
                            <img
                                src={paso.imagen}
                                alt={paso.titulo}
                                className="w-full h-32 object-cover hover:scale-110 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-0 transition-all">
                                <span className="text-white font-bold text-lg">{paso.numero}</span>
                            </div>
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ManualDeUso;
