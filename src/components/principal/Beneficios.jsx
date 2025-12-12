import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaPaw, FaSprayCan, FaShieldAlt, FaHeart, FaFeather, FaLeaf, FaWind } from 'react-icons/fa';

function Beneficios() {
    const beneficios = [
        {
            id: 1,
            icono: FaBalanceScale,
            titulo: "Estabilidad",
            descripcion: "Control del balance y distribución del peso"
        },
        {
            id: 2,
            icono: FaPaw,
            titulo: "Ergonomía Animal",
            descripcion: "Adaptación a la postura y tamaño de la mascota"
        },
        {
            id: 3,
            icono: FaSprayCan,
            titulo: "Higiene",
            descripcion: "Facilidad de limpieza y mantenimiento"
        },
        {
            id: 4,
            icono: FaShieldAlt,
            titulo: "Seguridad",
            descripcion: "Protección ante movimientos y condiciones del entorno"
        },
        {
            id: 5,
            icono: FaHeart,
            titulo: "Bienestar Integral",
            descripcion: "Mejora el bienestar físico y emocional de la mascota durante el traslado"
        },
        {
            id: 6,
            icono: FaFeather,
            titulo: "Reducción de Impactos",
            descripcion: "Reduce la exposición a vibraciones, golpes y movimientos bruscos"
        },
        {
            id: 7,
            icono: FaLeaf,
            titulo: "Sostenibilidad",
            descripcion: "Uso de plástico reciclado y opciones ecológicas"
        },
        {
            id: 8,
            icono: FaWind,
            titulo: "Ventilación",
            descripcion: "Circulación adecuada del aire interior"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="bg-primero py-20 px-6 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Beneficios de CityPet
                    </h2>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Descubre todas las ventajas que CityPet ofrece para ti y tu mascota
                    </p>
                </motion.div>

                {/* Grid de beneficios */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {beneficios.map((beneficio) => {
                        const IconComponent = beneficio.icono;
                        return (
                            <motion.div
                                key={beneficio.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all cursor-pointer"
                            >
                                <div className="flex justify-center mb-6">
                                    <IconComponent className="text-5xl text-segundo" />
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-3">
                                    {beneficio.titulo}
                                </h3>
                                <p className="text-gray-200 text-center text-sm leading-relaxed">
                                    {beneficio.descripcion}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Mensaje conclusivo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        CityPet combina innovación, sostenibilidad y responsabilidad animal para ofrecer la mejor solución de transporte de mascotas en entornos urbanos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Beneficios;
