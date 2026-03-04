// src/components/Tarjeta.js
import React from 'react';
import styles from './Tarjeta.module.css';

export default function Tarjeta({ titulo, descripcion, precio, textoBoton }) {
  return (
    <div className={styles.tarjeta}>

      {/* 📸 PLACEHOLDER: Cuando tengas imágenes reales, sustituye por <Image> de Next.js */}
      <div className={styles.imagenPlaceholder}>
        <span className={styles.placeholderEmoji}>📸</span>
        <span>Espacio para foto de {titulo}</span>
      </div>

      <div className={styles.contenido}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descripcion}>{descripcion}</p>

        <div className={styles.footerTarjeta}>
          {precio && (
            <span className={styles.precio}>${precio}</span>
          )}

          <a
            href="https://wa.me/528443921858?text=Hola%2C%20me%20interesa%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.boton}
          >
            {textoBoton || 'Ver más'}
          </a>
        </div>
      </div>

    </div>
  );
}