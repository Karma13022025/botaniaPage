// src/components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenido}>

        {/* Columna 1: Marca y descripción */}
        <div className={styles.columna}>
          <h3 className={styles.titulo}>Botania</h3>
          <p className={styles.descripcion}>
            Un refugio para tu paz mental y bienestar físico. Encuentra el equilibrio
            a través de nuestras terapias holísticas y la energía natural de los cuarzos.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className={styles.columna}>
          <h3 className={styles.titulo}>Explora</h3>
          <ul className={styles.enlaces}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/terapias">Terapias Holísticas</Link></li>
            <li><Link href="/cuarzos">Nuestros Cuarzos</Link></li>
            <li><Link href="/contacto">Contacto y Citas</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className={styles.columna}>
          <h3 className={styles.titulo}>Contacto</h3>
          <ul className={styles.enlaces}>
            <li>📍 Saltillo, Coahuila</li>
            <li>
              <a href="tel:8443921858" className={styles.contactoLink}>
                📱 844-392-1858
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/528443921858?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactoLink}
              >
                💬 WhatsApp
              </a>
            </li>
            <li>✉️ hola@botania.com</li>
          </ul>
        </div>

      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Botania. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}