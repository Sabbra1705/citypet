import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import equipo1 from "../../assets/images/equipo1.jpg";
import equipo2 from "../../assets/images/equipo2.webp";
import equipo3 from "../../assets/images/equipo3.jpg";
import equipo4 from "../../assets/images/equipo4.jpeg";
import equipo5 from "../../assets/images/equipo5.jpeg";

function NuestroEquipo() {
    const miembrosEquipo = [
        {
            id: 1,
            imagen: equipo1,
            nombre: "Sara Moncayo",
            rol: "Diseñadora",
            icono: FaUser
        },
        {
            id: 2,
            imagen: equipo2,
            nombre: "Sergio Cajigas",
            rol: "Diseñador",
            icono: FaUser
        },
        {
            id: 3,
            imagen: equipo3,
            nombre: "Tatiana Silva",
            rol: "Diseñadora",
            icono: FaUser
        },
        {
            id: 4,
            imagen: equipo4,
            nombre: "Luisa Cabrera",
            rol: "Diseñadora",
            icono: FaUser
        },
        {
            id: 5,
            imagen: equipo5,
            nombre: "Sebastián Morales",
            rol: "Diseñador",
            icono: FaUser
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section className="py-20 px-6 bg-tercero-claro relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-80 h-80 bg-primero rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-segundo rounded-full blur-3xl"></div>
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
                        Nuestro Equipo
                    </h2>
                    <p className="text-xl text-primero-claro max-w-2xl mx-auto">
                        Conoce a los estudiantes de Diseño Industrial apasionados que hacen realidad CityPet
                    </p>
                </motion.div>

                {/* Grid de miembros */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
                >
                    {miembrosEquipo.map((miembro) => (
                        <motion.div
                            key={miembro.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer text-center"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 md:h-96 mb-4">
                                <motion.img
                                    src={miembro.imagen}
                                    alt={miembro.nombre}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-primero-oscuro text-xl font-bold flex items-center justify-center gap-2">
                                    {React.createElement(miembro.icono, { className: 'text-segundo' })}
                                    {miembro.nombre}
                                </h3>
                                <p className="text-primero-claro text-sm mt-1">
                                    {miembro.rol}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mensaje inspirador */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-primero-claro max-w-2xl mx-auto leading-relaxed">
                        Somos un equipo  de estudiantes de <span className="font-bold text-primero-oscuro">Diseño Industrial</span> comprometidos con la innovación y la creación de soluciones sostenibles para mejorar la vida de las mascotas en la ciudad.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default NuestroEquipo;
