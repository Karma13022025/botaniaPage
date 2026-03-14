import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// SEO específico para el aviso legal y deslinde de responsabilidad.
export const metadata = {
    title: 'Aviso Legal',
    description: 'Aviso legal y deslinde de responsabilidad sobre los productos y servicios ofrecidos por Raíces de Luz.',
    alternates: { canonical: '/aviso-legal' },
    robots: { index: true, follow: true },
};

/**
 * Página de aviso legal del sitio.
 * Centraliza el deslinde de responsabilidad sobre terapias y productos herbolarios.
 */
export default function AvisoLegal() {
  return (
    <main className={styles.contenedor}>
      <section className={styles.hero}>
        <h1 className={styles.titulo}>Aviso Legal</h1>
        <p className={styles.descripcion}>
          Información importante sobre nuestros productos y servicios.
        </p>
      </section>

      <section className={styles.contenido}>
        <div className={styles.seccion}>
          <h2>Deslinde de Responsabilidad</h2>
          <p>
            Los productos herbolarios ofrecidos por <strong>Raíces de Luz</strong>, incluyendo las microdosis y
            fórmulas herbolarias, <strong>no son medicamentos</strong> y{' '}
            <strong>no sustituyen el tratamiento médico profesional</strong>.
          </p>
          <p>
            Estos productos son complementos naturales diseñados para contribuir
            al bienestar general. Su uso no garantiza la cura de enfermedades ni
            reemplaza el diagnóstico o tratamiento de un profesional de la
            salud.
          </p>
        </div>

        <div className={styles.seccion}>
          <h2>Recomendaciones</h2>
          <ul>
            <li>
              Consulta siempre a tu médico antes de iniciar cualquier
              tratamiento complementario.
            </li>
            <li>
              No suspendas medicamentos prescritos sin la aprobación de un
              profesional de la salud.
            </li>
            <li>
              Si estás embarazada, en periodo de lactancia o padeces alguna
              condición crónica, consulta con tu médico antes de consumir
              cualquier producto herbolario.
            </li>
            <li>
              En caso de reacción adversa, suspende el uso del producto
              inmediatamente y acude a tu médico.
            </li>
          </ul>
        </div>

        <div className={styles.seccion}>
          <h2>Terapias Holísticas</h2>
          <p>
            Las terapias holísticas ofrecidas por Raíces de Luz (masajes, reiki,
            alineación de chakras, aromaterapia, entre otras) son prácticas
            complementarias orientadas al bienestar y la relajación.
            <strong> No constituyen tratamientos médicos</strong> y no deben
            considerarse como sustitutos de atención médica profesional.
          </p>
        </div>

        <div className={styles.seccion}>
          <h2>Uso de la Información</h2>
          <p>
            La información proporcionada en este sitio web es con fines
            informativos únicamente. Raíces de Luz no se hace responsable por el
            uso indebido de los productos o por decisiones de salud tomadas
            exclusivamente con base en la información de este sitio.
          </p>
        </div>

        <div className={styles.volver}>
          <Link href="/" className={styles.botonVolver}>
            ← Volver al Inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
