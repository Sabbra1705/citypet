import React from 'react';
import { FaShieldAlt, FaSmile } from 'react-icons/fa';
import render from "../../assets/images/render19.png"

function Presentacion() {
    return (
        <section id="presentacion" className="bg-tercero-claro py-12 px-6 text-center relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primero rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-segundo rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
            <h2 className="text-3xl font-bold text-primero-oscuro mb-4 flex items-center justify-center gap-2">
                Transporte seguro y cómodo para tus mascotas
            </h2>
            <p className="text-lg text-primero-oscuro max-w-xl mx-auto flex items-start justify-center gap-2">
                <FaSmile className="text-segundo mt-1 flex-shrink-0" />
                <span>Citypet es un sistema diseñado para garantizar la seguridad y bienestar de tus mascotas durante el transporte en motocicletas urbanas, combinando confort, ventilación y facilidad de uso.</span>
            </p>
            <div className='flex flex-col justify-center '>
                <img className='md:w-1/3 mx-auto' src={render} alt="" />
            </div>
            </div>
        </section>
    );
}

export default Presentacion;
