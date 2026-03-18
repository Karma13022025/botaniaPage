import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Tarjeta from '../../components/Tarjeta';

// SEO específico para la página de terapias.
export const metadata = {
  title: 'Terapias Holísticas',
  description: 'Conoce nuestras terapias holísticas en Saltillo: masajes relajantes, piedras calientes, alineación de chakras, reiki y más. Agenda tu cita al 844-392-1858.',
  alternates: { canonical: '/terapias' },
  openGraph: {
    title: 'Terapias Holísticas | Raíces de Luz',
    description: 'Masajes, piedras calientes, chakras, reiki, aromaterapia y reflexología. Agenda tu sesión personalizada.',
    url: '/terapias',
  },
};

/**
 * Página de listado de terapias holísticas.
 * Usa el componente Tarjeta para mostrar cada terapia con su descripción e imagen.
 */
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
            descripcion="Terapia suave con aceites neutros para liberar la tensión muscular y mental acumulada."
            textoBoton="Agendar Masaje"
            imagen={{ src: '/images/terapias/relajante2.webp', alt: 'Masaje Relajante' }}
            priority={true}
          />

          <Tarjeta
            titulo="Piedras Calientes"
            descripcion="Técnica milenaria que utiliza piedras de basalto a temperatura ideal para descontracturar los músculos profundos."
            textoBoton="Agendar Terapia"
            imagen={{ src: '/images/terapias/piedrascalientes2.webp', alt: 'Masaje con Piedras Calientes' }}
            priority={true}
          />

          <Tarjeta
            titulo="Limpieza energética y alineación de Chakras"
            descripcion="Sesión energética utilizando cuarzos específicos para cada centro de energía, restaurando tu flujo vital."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/terapias/alineacionchakras2.webp', alt: 'Alineación de Chakras' }}
            priority={true}
          />

          <Tarjeta
            titulo="Aromaterapia"
            descripcion="Uso terapéutico de aceites esenciales puros para promover el bienestar físico, mental y emocional."
            imagen={{ src: '/images/terapias/aromaterapia.webp', alt: 'Aromaterapia' }}
          />

          <Tarjeta
            titulo="Reiki"
            descripcion="Técnica de canalización de energía universal para armonizar el cuerpo y la mente, promoviendo la auto-sanación."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/terapias/reiki2.webp', alt: 'Terapia de Reiki' }}
          />

          <Tarjeta
            titulo="Masaje Descontracturante"
            descripcion="Terapia enfocada en liberar la tensión crónica y desarmar las contracturas musculares ocasionadas por estrés o malas posturas."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/terapias/masaje-descontracturante.webp', alt: 'Masaje Descontracturante' }}
          />

          <Tarjeta
            titulo="Masaje Circulatorio"
            descripcion="Técnica que estimula el flujo sanguíneo y linfático. Ideal para piernas cansadas, retención de líquidos y pesadez general."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/terapias/masaje-circulatorio.webp', alt: 'Masaje Circulatorio' }}
          />

          <Tarjeta
            titulo="Masaje en silla"
            descripcion="Masaje práctico y breve realizado en una silla ergonómica, ideal para cuello, hombros y espalda alta. Perfecto para personas con poco tiempo."
            textoBoton="Agendar Masaje"
            imagen={{ src: '/images/terapias/masajeSilla.webp', alt: 'Masaje en silla' }}
          />

          <Tarjeta
            titulo="Masaje Lomi Lomi"
            descripcion="Técnica de origen hawaiano con movimientos largos y envolventes que generan profunda relajación física y emocional."
            textoBoton="Agendar Masaje"
            imagen={{ src: '/images/terapias/masaje-lomi.webp', alt: 'Masaje Lomi Lomi' }}
          />

          <Tarjeta
            titulo="Masaje de pies"
            descripcion="Masaje focalizado en pies y plantas que ayuda a aliviar cansancio, mejorar la circulación y relajar todo el cuerpo."
            textoBoton="Agendar Masaje"
            imagen={{ src: '/images/terapias/masaje-pies.webp', alt: 'Masaje de pies' }}
          />

          <Tarjeta
            titulo="Masaje de Tejido Profundo"
            descripcion="Presión firme y profunda para llegar a las capas más internas del músculo. Excelente para deportistas o dolor crónico severo."
            textoBoton="Agendar Sesión"
            imagen={{ src: '/images/terapias/masajetejidoprofundo2.webp', alt: 'Masaje de Tejido Profundo' }}
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