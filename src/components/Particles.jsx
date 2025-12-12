import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Particles() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Crear partículas aleatorias
        const generarParticulas = () => {
            const nuevasParticulas = [];
            for (let i = 0; i < 30; i++) {
                nuevasParticulas.push({
                    id: i,
                    left: Math.random() * 100,
                    delay: Math.random() * 0.5,
                    duration: 8 + Math.random() * 4,
                    size: 4 + Math.random() * 12,
                    opacity: 0.3 + Math.random() * 0.5,
                });
            }
            setParticles(nuevasParticulas);
        };

        generarParticulas();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-segundo"
                    style={{
                        left: `${particle.left}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        top: -20,
                    }}
                    animate={{
                        y: window.innerHeight + 100,
                        opacity: [particle.opacity, particle.opacity * 0.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    );
}

export default Particles;
