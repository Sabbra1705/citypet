import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaLightbulb, FaUniversity } from 'react-icons/fa';
import render19 from "../../assets/images/render19.png";

function AcercaDelProyecto() {
    const detalles = [
        {
            icono: FaUniversity,
            titulo: "Institución",
            contenido: "Universidad del Valle"
        },
        {
            icono: FaGraduationCap,
            titulo: "Semestre",
            contenido: "6to Semestre"
        },
        {
            icono: FaBook,
            titulo: "Materia",
            contenido: "Proyecto Producto"
        },
        {
            icono: FaLightbulb,
            titulo: "Carrera",
            contenido: "Diseño Industrial"
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
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="bg-primero py-20 px-6 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-segundo rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Título e Imagen */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Acerca del Proyecto
                        </h2>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            CityPet es el resultado del trabajo colaborativo y dedicado de estudiantes de <span className="font-bold">Diseño Industrial</span> en la materia <span className="font-bold">Proyecto Producto</span>, donde aplicamos conocimientos teóricos y prácticos para crear soluciones innovadoras.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-white rounded-2xl blur-2xl opacity-40 -z-10"></div>
                            <img 
                                src={render19} 
                                alt="CityPet Render" 
                                className="w-full max-w-sm drop-shadow-2xl rounded-2xl relative z-10"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Grid de detalles */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {detalles.map((detalle, index) => {
                        const Icon = detalle.icono;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="flex justify-center mb-6">
                                    <Icon className="text-5xl text-segundo" />
                                </div>
                                <h3 className="text-xl font-bold text-primero-oscuro text-center mb-2">
                                    {detalle.titulo}
                                </h3>
                                <p className="text-lg text-primero-claro text-center font-semibold">
                                    {detalle.contenido}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Descripción del proyecto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white border-opacity-20"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
                    <p className="text-lg text-gray-200 leading-relaxed mb-6">
                        A través de este proyecto, buscamos aplicar los principios del diseño industrial para resolver un problema real en la sociedad. CityPet representa nuestro compromiso con la <span className="font-bold text-segundo">innovación responsable</span>, la <span className="font-bold text-segundo">sostenibilidad</span> y la <span className="font-bold text-segundo">mejora de la calidad de vida</span> de nuestras mascotas en entornos urbanos.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        Este proyecto es el resultado de investigación, diseño, prototipado y desarrollo colaborativo, donde cada integrante del equipo ha aportado su creatividad y conocimiento para hacer realidad una solución innovadora.
                    </p>
                </motion.div>

                {/* Conclusión */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-lg text-gray-200 italic">
                        "El diseño industrial no es solo crear objetos, es crear experiencias que mejoran la vida de las personas"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default AcercaDelProyecto;
