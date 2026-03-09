import React from 'react';
import styles from './page.module.css';
import Tarjeta from '../../components/Tarjeta';

export const metadata = {
    title: 'Microdosis Herbolarias',
    description: 'Conoce nuestras microdosis naturales en Saltillo. Soluciones herbolarias para ansiedad, descanso, digestión y bienestar general.',
    alternates: { canonical: '/microdosis' },
    openGraph: {
        title: 'Microdosis de Plantas y Hongos | Botania',
        description: 'Microdosis naturales para tu bienestar. Medicina natural de alta calidad para mejorar tu calidad de vida.',
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

            {/* --- GRID DE MICRODOSIS --- */}
            <section className={styles.microdosis}>
                <div className={styles.microdosisGrid}>
                    <Tarjeta
                        titulo="Ansiedad y Estrés"
                        descripcion="Fórmula relajante que ayuda a controlar los niveles de estrés, reducir la ansiedad y lograr un estado de calma durante el día."
                        textoBoton="Pedir Información"
                    />

                    <Tarjeta
                        titulo="Descanso Profundo"
                        descripcion="Mezcla natural diseñada para combatir el insomnio temporal o crónico, facilitando el sueño profundo y reparador."
                        textoBoton="Pedir Información"
                    />

                    <Tarjeta
                        titulo="Melena de León"
                        descripcion="Mejora la memoria, potencia la concentración, despeja la niebla mental y protege la salud del sistema nervioso a largo plazo."
                        textoBoton="Pedir Información"
                    />

                    <Tarjeta
                        titulo="Hongo Reishi"
                        descripcion="Conocido como el hongo de la inmortalidad. Fortalece el sistema inmunológico, disminuye la fatiga y regula el metabolismo."
                        textoBoton="Pedir Información"
                    />

                    <Tarjeta
                        titulo="Digestión y Metabolismo"
                        descripcion="Favorece el equilibrio gastrointestinal, aliviando inflamación o pesadez y promoviendo una salud digestiva óptima."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/microdosis_diabetes.jpeg', alt: 'Microdosis de Digestión' }}
                    />
                </div>
            </section>

            {/* --- CTA --- */}
            <section className={styles.cta}>
                <h2>¿Qué microdosis necesitas?</h2>
                <p>Contáctanos para recomendarte la fórmula ideal según tus necesidades y sintomatología. </p>
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
