import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaSmile, FaHeartbeat, FaCheckCircle, FaUserFriends } from 'react-icons/fa';

function Valores() {
    const valores = [
        {
            id: 1,
            icon: FaShieldAlt,
            titulo: "Seguridad Total",
            descripcion: "Estructura reforzada y diseño clínico que protege a tu mascota en cada viaje urbano."
        },
        {
            id: 2,
            icon: FaLeaf,
            titulo: "Ecológico",
            descripcion: "Reduce tu huella de carbono con un transporte sostenible para mascotas en la ciudad."
        },
        {
            id: 3,
            icon: FaSmile,
            titulo: "Comodidad",
            descripcion: "Espacio amplio, ventilación óptima y materiales suaves para una experiencia agradable."
        },
        {
            id: 4,
            icon: FaHeartbeat,
            titulo: "Bienestar",
            descripcion: "Diseñado pensando en la salud y el confort de tus mascotas durante el transporte."
        },
        {
            id: 5,
            icon: FaCheckCircle,
            titulo: "Fácil de Usar",
            descripcion: "Instalación sencilla, mantenimiento mínimo y máxima practicidad en tu día a día."
        },
        {
            id: 6,
            icon: FaUserFriends,
            titulo: "Comunidad",
            descripcion: "Únete a una comunidad de dueños de mascotas comprometidos con el transporte responsable."
        }
    ];

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
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        <section className="bg-tercero-claro py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primero-oscuro mb-4">
                        Nuestros Valores
                    </h2>
                    <p className="text-xl text-primero-claro max-w-2xl mx-auto">
                        Conoce los beneficios y principios que hacen de CityPet la mejor opción para transportar a tus mascotas
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {valores.map((valor) => {
                        const IconComponent = valor.icon;
                        return (
                            <motion.div
                                key={valor.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-primero rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                            >
                                <div className="flex justify-center mb-6">
                                    <IconComponent className="text-white text-5xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white text-center mb-4">
                                    {valor.titulo}
                                </h3>
                                <p className="text-white text-center text-lg leading-relaxed opacity-90">
                                    {valor.descripcion}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Valores;
