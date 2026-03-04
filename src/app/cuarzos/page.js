import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Cuarzos y Cristales',
  description: 'Conoce las propiedades energéticas de nuestros cuarzos y cristales. Amatista, cuarzo rosa, obsidiana y más. Información detallada sobre cada piedra.',
  alternates: { canonical: '/cuarzos' },
  openGraph: {
    title: 'Cuarzos y Cristales | Botania',
    description: 'Explora nuestra colección de cuarzos y cristales. Amatista, cuarzo rosa, obsidiana, citrino y más piedras energéticas.',
    url: '/cuarzos',
  },
};

const cuarzos = [
  {
    nombre: 'Amatista',
    emoji: '💜',
    propiedad: 'Paz y Espiritualidad',
    descripcion: 'Conocida como la piedra de la sabiduría espiritual. Ayuda a calmar la mente, fomentar la intuición y proteger de energías negativas. Ideal para meditación.',
    chakra: 'Corona y Tercer Ojo',
  },
  {
    nombre: 'Cuarzo Rosa',
    emoji: '🩷',
    propiedad: 'Amor y Sanación Emocional',
    descripcion: 'La piedra del amor incondicional. Abre el corazón para dar y recibir amor, sana heridas emocionales y fomenta la autoestima y el perdón.',
    chakra: 'Corazón',
  },
  {
    nombre: 'Cuarzo Cristal',
    emoji: '🤍',
    propiedad: 'Claridad y Amplificación',
    descripcion: 'El maestro de los cristales. Amplifica la energía y la intención, mejora la concentración y armoniza todos los chakras. Versátil y poderoso.',
    chakra: 'Todos los chakras',
  },
  {
    nombre: 'Obsidiana',
    emoji: '🖤',
    propiedad: 'Protección y Tierra',
    descripcion: 'Piedra volcánica de gran poder protector. Absorbe las energías negativas, ayuda a enfrentar la verdad interior y promueve la fuerza emocional.',
    chakra: 'Raíz',
  },
  {
    nombre: 'Citrino',
    emoji: '💛',
    propiedad: 'Abundancia y Alegría',
    descripcion: 'Conocido como la piedra del éxito. Atrae la prosperidad, estimula la creatividad y llena de energía positiva. Perfecto para nuevos comienzos.',
    chakra: 'Plexo Solar',
  },
  {
    nombre: 'Turmalina Negra',
    emoji: '⬛',
    propiedad: 'Escudo Energético',
    descripcion: 'El escudo de protección por excelencia. Repele las energías negativas, alivia el estrés y promueve una actitud positiva y equilibrada ante la vida.',
    chakra: 'Raíz',
  },
  {
    nombre: 'Ágata',
    emoji: '🤎',
    propiedad: 'Estabilidad y Armonía',
    descripcion: 'Piedra de la estabilidad emocional. Aporta equilibrio, fortalece la conexión con la tierra y ayuda a superar momentos de cambio con calma.',
    chakra: 'Varía según color',
  },
  {
    nombre: 'Jade',
    emoji: '💚',
    propiedad: 'Prosperidad y Serenidad',
    descripcion: 'Símbolo de pureza y sabiduría. Atrae la buena suerte, promueve el equilibrio emocional y fortalece la conexión con la naturaleza.',
    chakra: 'Corazón',
  },
  {
    nombre: 'Selenita',
    emoji: '🔮',
    propiedad: 'Limpieza y Conexión Espiritual',
    descripcion: 'Cristal de luz pura. Limpia y recarga otros cristales, promueve la paz interior y facilita la conexión con planos superiores de consciencia.',
    chakra: 'Corona',
  },
];

export default function Cuarzos() {
  return (
    <main className={styles.contenedor}>
      {/* --- HERO --- */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>💎 Colección de Cristales</span>
        <h1 className={styles.titulo}>Nuestros Cuarzos</h1>
        <p className={styles.descripcion}>
          Cada cristal posee una vibración única y propiedades especiales.
          Conoce nuestra colección y descubre cuál resuena con tu energía.
        </p>
      </section>

      {/* --- GALERÍA --- */}
      <section className={styles.galeria}>
        <div className={styles.galeriaGrid}>
          {cuarzos.map((cuarzo, index) => (
            <div key={index} className={styles.cuarzoCard}>
              <div className={styles.cuarzoImagen}>
                {/* PLACEHOLDER: Reemplaza con fotos reales de tus cuarzos */}
                <span className={styles.cuarzoEmoji}>{cuarzo.emoji}</span>
                <p className={styles.cuarzoImgText}>📸 Espacio para foto</p>
              </div>
              <div className={styles.cuarzoInfo}>
                <h3 className={styles.cuarzoNombre}>{cuarzo.nombre}</h3>
                <span className={styles.cuarzoPropiedad}>{cuarzo.propiedad}</span>
                <p className={styles.cuarzoDesc}>{cuarzo.descripcion}</p>
                <div className={styles.cuarzoChakra}>
                  <span>🔵 Chakra:</span> {cuarzo.chakra}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INFO EXTRA --- */}
      <section className={styles.infoExtra}>
        <h2 className={styles.infoTitulo}>¿Cómo elegir tu cuarzo?</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcono}>🧭</span>
            <h3>Sigue tu intuición</h3>
            <p>El cuarzo correcto te atraerá naturalmente. Confía en lo que sientes al ver o tocar un cristal.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcono}>🎯</span>
            <h3>Define tu intención</h3>
            <p>¿Buscas paz, protección, amor o claridad? Cada cuarzo tiene propiedades específicas para ayudarte.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcono}>✨</span>
            <h3>Consulta con nosotros</h3>
            <p>Te asesoramos gratuitamente para encontrar el cristal que mejor se adapte a tus necesidades.</p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className={styles.cta}>
        <h2>¿Quieres conocer más sobre algún cuarzo?</h2>
        <p>Agenda una consulta y te ayudamos a encontrar el cristal perfecto para ti.</p>
        <div className={styles.ctaBotones}>
          <a href="tel:8443921858" className={styles.ctaBoton}>📞 Llamar Ahora</a>
          <a
            href="https://wa.me/528443921858?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20cuarzos"
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