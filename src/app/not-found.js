import Link from 'next/link';
import styles from './not-found.module.css';

// Metadata para la página 404. Se desindexa explícitamente.
export const metadata = {
  title: 'Página no encontrada',
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Página 404 personalizada.
 * Ofrece enlaces de retorno al inicio y a la sección de terapias.
 */
export default function NotFound() {
  return (
    <main className={styles.contenedor}>
      <div className={styles.contenido}>
        <div className={styles.iconoAstral}>✨</div>
        <h1 className={styles.titulo}>404</h1>
        <h2 className={styles.subtitulo}>Parece que te perdiste ...</h2>
        <p className={styles.texto}>
          La energía de esta página se ha desvanecido o la ruta ya no existe.
          Pero no te preocupes, siempre puedes volver a tu centro.
        </p>

        <div className={styles.botones}>
          <Link href="/" className={styles.botonPrimario}>
            Volver al Inicio
          </Link>
          <Link href="/terapias" className={styles.botonSecundario}>
            Ver Terapias
          </Link>
        </div>
      </div>

      <div className={styles.decoracionFondo}>
        <span className={styles.hojaOculta}>🌿</span>
        <span className={styles.cuarzoOculto}>💎</span>
      </div>
    </main>
  );
}
