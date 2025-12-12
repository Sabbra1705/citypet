import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaPaw, FaEnvelope } from 'react-icons/fa';

function Agradecimientos() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="bg-primero-oscuro py-20 px-6 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Icono con animación */}
                    <motion.div
                        variants={itemVariants}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex justify-center mb-8"
                    >
                        <FaHeart className="text-6xl text-segundo" />
                    </motion.div>

                    {/* Título principal */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        ¡Gracias por tu atención!
                    </motion.h2>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Agradecemos sinceramente tu interés en <span className="font-bold text-segundo">CityPet</span>. Nos enorgullece compartir nuestro proyecto de Diseño Industrial y esperamos que hayas conocido una solución innovadora para el transporte seguro de tus mascotas.
                    </motion.p>

                    {/* Mensaje secundario */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
                    >
                        Tu mascota merece lo mejor, y nosotros estamos comprometidos en proporcionarlo.
                    </motion.p>

                    {/* Iconos de valores */}
                    <motion.div
                        variants={containerVariants}
                        className="flex justify-center gap-8 mb-12"
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center"
                        >
                            <FaPaw className="text-5xl text-segundo mb-3" />
                            <p className="text-white font-semibold">Por tus mascotas</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center"
                        >
                            <FaHeart className="text-5xl text-segundo mb-3" />
                            <p className="text-white font-semibold">Con pasión</p>
                        </motion.div>
                    </motion.div>

                    {/* Contacto */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
                    >
                        <p className="text-gray-200 mb-4">¿Tienes preguntas o sugerencias?</p>
                        <a
                            href="mailto:contacto@citypet.com"
                            className="inline-flex items-center gap-2 bg-segundo text-primero-oscuro px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                        >
                            <FaEnvelope /> Contáctanos
                        </a>
                    </motion.div>

                    {/* Firma del equipo */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12"
                    >
                        <p className="text-gray-400 text-sm">
                            Hecho con ❤️ por el equipo de Diseño Industrial
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            Universidad del Valle • Proyecto Producto • 6to Semestre
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Agradecimientos;
