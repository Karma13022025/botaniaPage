import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Tarjeta from '../../components/Tarjeta';

export const metadata = {
  title: 'Terapias Holísticas',
  description: 'Conoce nuestras terapias holísticas en Saltillo: masajes relajantes, piedras calientes, alineación de chakras, reiki y más. Agenda tu cita al 844-392-1858.',
  alternates: { canonical: '/terapias' },
  openGraph: {
    title: 'Terapias Holísticas | Botania',
    description: 'Masajes, piedras calientes, chakras, reiki, aromaterapia y reflexología. Agenda tu sesión personalizada.',
    url: '/terapias',
  },
};

export default function Terapias() {
  return (
    <main className={styles.contenedor}>
      {/* --- HERO --- */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>💆 Bienestar integral</span>
        <h1 className={styles.titulo}>Nuestras Terapias Holísticas</h1>
        <p className={styles.descripcion}>
          Tratamientos diseñados para restaurar tu equilibrio natural.
          Cada sesión es personalizada según tus necesidades.
        </p>
      </section>

      {/* --- GRID DE TERAPIAS --- */}
      <section className={styles.terapias}>
        <div className={styles.terapiasGrid}>
          <Tarjeta
            titulo="Masaje Relajante"
            descripcion="Terapia suave con aceites esenciales de lavanda y eucalipto para liberar la tensión muscular y mental acumulada."
            textoBoton="Agendar Masaje"
            imagen={{ src: '/images/masaje-relajante-tarjeta.webp', alt: 'Masaje Relajante' }}
          />

          <Tarjeta
            titulo="Piedras Calientes"
            descripcion="Técnica milenaria que utiliza piedras volcánicas a temperatura ideal para descontracturar los músculos profundos."
            textoBoton="Agendar Terapia"
            imagen={{ src: '/images/piedras-calientes.webp', alt: 'Masaje con Piedras Calientes' }}
          />

          <Tarjeta
            titulo="Alineación de Chakras"
            descripcion="Sesión energética utilizando cuarzos específicos para cada centro de energía, restaurando tu flujo vital."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/alineacion-chakras.webp', alt: 'Alineación de Chakras' }}
          />

          <Tarjeta
            titulo="Aromaterapia"
            descripcion="Uso terapéutico de aceites esenciales puros para promover el bienestar físico, mental y emocional."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/aromaterapia.webp', alt: 'Aromaterapia' }}
          />

          <Tarjeta
            titulo="Reiki"
            descripcion="Técnica de canalización de energía universal para armonizar el cuerpo y la mente, promoviendo la auto-sanación."
            textoBoton="Agendar Sesión"
          />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className={styles.cta}>
        <h2>¿No sabes qué terapia es para ti?</h2>
        <p>Llámanos y te asesoramos sin compromiso. Juntos encontraremos la terapia ideal para tu bienestar.</p>
        <div className={styles.ctaBotones}>
          <a href="tel:8443921858" className={styles.ctaBoton}>📞 Llamar Ahora</a>
          <a
            href="https://wa.me/528443921858?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20terapias"
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