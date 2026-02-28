import React from 'react';
import './globals.css';
// Así es como Next.js importa los módulos CSS
import styles from './page.module.css'; 

export default function InicioTerapias() {
  return (
    <main className={styles.main}>
      {/* --- PORTADA PRINCIPAL --- */}
      <header className={styles.hero}>
        <h1 className={styles.titulo}>Armonía & Equilibrio</h1>
        <p className={styles.subtitulo}>Masajes terapéuticos y cuarzos para sanar tu energía.</p>
        <button className={styles.boton}>Reserva tu espacio</button>
      </header>

      {/* --- SECCIÓN DE BIENVENIDA --- */}
      <section className={styles.seccion}>
        <h2 className={styles.tituloSeccion}>
          Un respiro para tu cuerpo y mente
        </h2>
        <p className={styles.textoSeccion}>
          En nuestro espacio holístico, combinamos técnicas milenarias de masaje con 
          la frecuencia vibratoria de los cuarzos para liberar la tensión acumulada 
          y devolverte a tu centro.
        </p>
      </section>
    </main>
  );
}