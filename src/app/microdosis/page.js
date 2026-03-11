import React from 'react';
import styles from './page.module.css';
import BuscadorMicrodosis from '../../components/BuscadorMicrodosis';

export const metadata = {
    title: 'Microdosis Herbolarias',
    description: 'Conoce nuestras microdosis naturales en Saltillo. Fórmulas herbolarias para artritis, diabetes, estrés, circulación, colesterol y más.',
    alternates: { canonical: '/microdosis' },
    openGraph: {
        title: 'Microdosis Herbolarias | Botania',
        description: 'Microdosis naturales para tu bienestar. Medicina herbolaria de alta calidad para mejorar tu calidad de vida.',
        url: '/microdosis',
    },
};

export default function Microdosis() {
    return (
        <main className={styles.contenedor}>
            {/* --- HERO --- */}
            <section className={styles.hero}>
                <span className={styles.heroTag}>🌿 Medicina natural</span>
                <h1 className={styles.titulo}>Microdosis Herbolarias</h1>
                <p className={styles.descripcion}>
                    Extractos naturales altamente concentrados que te ayudan a recuperar
                    el equilibrio físico y emocional, de manera segura y sin efectos secundarios.
                </p>
            </section>

            {/* --- BUSCADOR + GRID (Client Component) --- */}
            <BuscadorMicrodosis />

            {/* --- CTA --- */}
            <section className={styles.cta}>
                <h2>¿Qué microdosis necesitas?</h2>
                <p>Contáctanos para recomendarte la fórmula ideal según tus necesidades y sintomatología.</p>
                <div className={styles.ctaBotones}>
                    <a href="tel:8443921858" className={styles.ctaBoton}>📞 Llamar Ahora</a>
                    <a
                        href="https://wa.me/528443921858?text=Hola%2C%20quisiera%20pedir%20informaci%C3%B3n%20sobre%20las%20microdosis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaBotonWA}
                    >
                        💬 WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
