import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ConoceNosotros() {
    const caracteristicas = [
        {
            icon: FaLightbulb,
            texto: "Innovación en Diseño"
        },
        {
            icon: FaUsers,
            texto: "Equipo Comprometido"
        },
        {
            icon: FaRocket,
            texto: "Visión al Futuro"
        }
    ];

    return (
        <section className="bg-primero-oscuro py-20 px-6 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-primero rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Quiénes Somos?
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Somos estudiantes de <span className="font-bold text-segundo">Diseño Industrial</span> apasionados por crear soluciones innovadoras que mejoren la vida de las personas y sus mascotas. CityPet nace de nuestra dedicación al diseño responsable y la sostenibilidad.
                    </p>
                </motion.div>

                {/* Características */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    {caracteristicas.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <Icon className="text-5xl text-segundo" />
                                <p className="text-white text-lg font-semibold text-center">
                                    {item.texto}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Principal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-200 mb-8">
                        Descubre nuestra historia, nuestro equipo y la pasión detrás de CityPet
                    </p>
                    <Link
                        to="/nosotros"
                        className="inline-flex items-center gap-3 bg-segundo text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all group"
                    >
                        Conoce Nuestro Equipo
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                {/* Elemento decorativo inferior */}
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="flex justify-center mt-16"
                >
                    <div className="text-2xl text-segundo opacity-50">
                        ↓
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ConoceNosotros;
