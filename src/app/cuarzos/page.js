import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// SEO específico para la página de colección de cuarzos.
export const metadata = {
  title: 'Cuarzos y Cristales',
  description: 'Conoce las propiedades energéticas de nuestros cuarzos y cristales. Amatista, cuarzo rosa, obsidiana y más. Información detallada sobre cada piedra.',
  alternates: { canonical: '/cuarzos' },
  openGraph: {
    title: 'Cuarzos y Cristales | Raíces de Luz',
    description: 'Explora nuestra colección de cuarzos y cristales. Amatista, cuarzo rosa, obsidiana, citrino y más piedras energéticas.',
    url: '/cuarzos',
  },
};

// Catálogo estático de piezas de cuarzo mostradas en la galería.
// Si se migra a CMS/BD, este arreglo sería reemplazado por datos dinámicos.
const cuarzos = [
  {
    nombre: 'Amatista',
    imagen: '/images/cuarzos/cristales-amatista-citrino.webp',
    propiedad: 'Paz y Espiritualidad',
    descripcion: 'Piedra de la sabiduría espiritual. Ayuda a calmar la mente, fomentar la intuición y proteger de energías negativas. Ideal para meditación.',
    chakra: 'Corona y Tercer Ojo',
  },
  {
    nombre: 'Cuarzo Rosa',
    imagen: '/images/cuarzos/cristales-rojos-rosas.webp',
    propiedad: 'Amor y Sanación Emocional',
    descripcion: 'La piedra del amor incondicional. Abre el corazón para dar y recibir amor, sana heridas emocionales y fomenta la autoestima.',
    chakra: 'Corazón',
  },
  {
    nombre: 'Turmalina Negra',
    imagen: '/images/cuarzos/cristales-verdes-negros.webp',
    propiedad: 'Escudo Energético',
    descripcion: 'El escudo protector por excelencia. Repele pesadez, alivia el estrés y promueve una fuerte actitud arraigada y equilibrada.',
    chakra: 'Raíz',
  },
  {
    nombre: 'Dijes de Corazón',
    imagen: '/images/cuarzos/dijes-corazon-variados.webp',
    propiedad: 'Amor y Conexión',
    descripcion: 'Lleva la magia contigo. Nuestros dijes tallados aseguran que la vibración de tu cristal elegido permanezca contigo a lo largo del día.',
    chakra: 'Corazón',
  },
  {
    nombre: 'Citrino',
    imagen: '/images/cuarzos/citrino.webp',
    propiedad: 'Abundancia y Alegría',
    descripcion: 'Conocido como la piedra del éxito. Atrae prosperidad, estimula la creatividad y llena de energía positiva. Atrae motivación genuina.',
    chakra: 'Plexo Solar',
  },
  {
    nombre: 'Cornalina Naranja',
    imagen: '/images/cuarzos/cristales-rojos-rosas.webp',
    propiedad: 'Pasión y Acción',
    descripcion: 'Cristal de fuego y creatividad. Estimula la motivación, ayuda a vencer la procrastinación e inyecta profunda vitalidad física.',
    chakra: 'Sacro',
  },
  {
    nombre: 'Jade Verde',
    imagen: '/images/cuarzos/cristales-verdes-negros.webp',
    propiedad: 'Prosperidad y Serenidad',
    descripcion: 'Símbolo de pureza. Promueve el equilibrio profundo de las emociones, atrae el positivismo y fortalece tu conexión con la tierra.',
    chakra: 'Corazón',
  },
  {
    nombre: 'Colección Combinada',
    imagen: '/images/cuarzos/cuarzos-varios.webp',
    propiedad: 'Balance Energético',
    descripcion: 'Integra los diferentes polos de energía. Una colección curada que balancea desde el chakra raíz hasta la corona en sintonía perfecta.',
    chakra: 'Todos los chakras',
  }
];

/**
 * Página de colección de cuarzos.
 * Muestra una galería con información de cada pieza más tips para elegir el cristal adecuado.
 */
export default function Cuarzos() {
  return (
    <main className={styles.contenedor}>
      {/* --- HERO --- */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>💎 Nuestra Exclusiva Selección</span>
        <h1 className={styles.titulo}>Colección de Cuarzos</h1>
        <p className={styles.descripcion}>
          Descubre nuestra galería de piezas energéticas. Cada uno de nuestros
          cristales posee una vibración única para guiarte en tu camino
          espiritual.
        </p>
      </section>

      {/* --- GALERÍA --- */}
      <section className={styles.galeria}>
        <div className={styles.galeriaGrid}>
          {cuarzos.map((cuarzo, index) => (
            <div key={index} className={styles.cuarzoCard}>
              <div className={styles.cuarzoImagen}>
                {cuarzo.imagen ? (
                  <Image
                    src={cuarzo.imagen}
                    alt={`${cuarzo.nombre} - ${cuarzo.propiedad}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    quality={75}
                  />
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      color: 'var(--color-texto-suave)',
                      fontStyle: 'italic',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                      📸
                    </span>
                    <span>Sube foto de {cuarzo.nombre}</span>
                  </div>
                )}
              </div>
              <div className={styles.cuarzoInfo}>
                <h3 className={styles.cuarzoNombre}>{cuarzo.nombre}</h3>
                <span className={styles.cuarzoPropiedad}>
                  {cuarzo.propiedad}
                </span>
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
            <p>
              El cuarzo correcto te atraerá naturalmente. Confía en lo que
              sientes al ver un cristal.
            </p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcono}>🎯</span>
            <h3>Define tu intención</h3>
            <p>
              ¿Buscas paz, protección, amor o claridad? Cada cuarzo tiene
              propiedades específicas para ti.
            </p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcono}>✨</span>
            <h3>Asesoría gratuita</h3>
            <p>
              Te guiamos en tu elección para encontrar el cristal que mejor se
              adapte a tu energía.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className={styles.cta}>
        <h2>¿Listo para encontrar tu amuleto?</h2>
        <p>
          Escríbenos o llámanos para verificar disponibilidad de piezas y
          agendar una consulta.
        </p>
        <div className={styles.ctaBotones}>
          <a href="tel:8443921858" className={styles.ctaBoton}>
            📞 Llamar Ahora
          </a>
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