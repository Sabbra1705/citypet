import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const enlacesRapidos = [
        { nombre: 'Home', ruta: '/' },
        { nombre: 'Nosotros', ruta: '/nosotros' },
        { nombre: 'Manual de Uso', ruta: '/#manual' },
        { nombre: 'Valores', ruta: '/#valores' }
    ];

    const redesSociales = [
        { icono: FaFacebook, enlace: '#', nombre: 'Facebook' },
        { icono: FaInstagram, enlace: '#', nombre: 'Instagram' },
        { icono: FaLinkedin, enlace: '#', nombre: 'LinkedIn' },
        { icono: FaTwitter, enlace: '#', nombre: 'Twitter' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
        <footer className="bg-primero-oscuro text-white">
            {/* Sección Principal */}
            <div className="border-b border-primero">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-8 md:gap-12"
                    >
                        {/* Información de la Empresa */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-bold mb-4 text-segundo">CityPet</h3>
                            <p className="text-gray-300 mb-6">
                                Soluciones innovadoras en transporte de mascotas para la ciudad moderna.
                            </p>
                            <p className="text-sm text-gray-400">
                                Diseñado por estudiantes apasionados de Diseño Industrial.
                            </p>
                        </motion.div>

                        {/* Enlaces Rápidos */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
                            <ul className="space-y-3">
                                {enlacesRapidos.map((enlace, index) => (
                                    <li key={index}>
                                        <Link
                                            to={enlace.ruta}
                                            className="text-gray-300 hover:text-segundo transition-colors flex items-center gap-2"
                                        >
                                            <span className="text-segundo">→</span>
                                            {enlace.nombre}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contacto */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-bold mb-6">Contacto</h4>
                            <div className="space-y-4">
                                <a
                                    href="mailto:contacto@citypet.com"
                                    className="flex items-center gap-3 text-gray-300 hover:text-segundo transition-colors"
                                >
                                    <FaEnvelope className="text-segundo" />
                                    <span>contacto@citypet.com</span>
                                </a>
                                <a
                                    href="tel:+573001234567"
                                    className="flex items-center gap-3 text-gray-300 hover:text-segundo transition-colors"
                                >
                                    <FaPhone className="text-segundo" />
                                    <span>+57 317 190 47 38</span>
                                </a>
                                <div className="flex items-start gap-3 text-gray-300">
                                    <FaMapMarkerAlt className="text-segundo mt-1 flex-shrink-0" />
                                    <span>Cali, Colombia</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Redes Sociales */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-bold mb-6">Síguenos</h4>
                            <div className="flex gap-4">
                                {redesSociales.map((red, index) => {
                                    const Icon = red.icono;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={red.enlace}
                                            className="w-12 h-12 bg-segundo rounded-full flex items-center justify-center text-primero-oscuro hover:bg-gray-300 transition-all"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                            title={red.nombre}
                                        >
                                            <Icon className="text-lg" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Sección Inferior */}
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-400 text-sm text-center md:text-left"
                >
                    © 2024 CityPet. Todos los derechos reservados. | Diseñado con ❤️ por estudiantes de Diseño Industrial
                </motion.p>

                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-segundo text-primero-oscuro rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                    aria-label="Volver al inicio"
                >
                    <FaArrowUp />
                </motion.button>
            </div>
        </footer>
    );
}

export default Footer;
