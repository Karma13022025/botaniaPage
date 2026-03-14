'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

/**
 * Barra de navegación principal (sticky).
 * Incluye menú hamburguesa para móvil y CTA de llamada directa.
 */
export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Raíces de Luz</Link>
      </div>

      {/* Hamburguesa para móvil */}
      <button
        className={`${styles.hamburguesa} ${
          menuAbierto ? styles.activa : ''
        }`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú de navegación"
        id="menu-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay para cerrar al tocar fuera */}
      {menuAbierto && (
        <div className={styles.overlay} onClick={cerrarMenu} />
      )}

      <ul
        className={`${styles.enlaces} ${menuAbierto ? styles.abierto : ''}`}
      >
        <li>
          <Link href="/" onClick={cerrarMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/terapias" onClick={cerrarMenu}>
            Terapias
          </Link>
        </li>
        <li>
          <Link href="/cuarzos" onClick={cerrarMenu}>
            Cuarzos
          </Link>
        </li>
        <li>
          <Link href="/microdosis" onClick={cerrarMenu}>
            Microdosis
          </Link>
        </li>
        <li>
          <Link href="/contacto" onClick={cerrarMenu}>
            Contacto
          </Link>
        </li>
      </ul>

      <div className={styles.ctaContainer}>
        <a
          href="tel:8443921858"
          className={styles.btnContacto}
          id="navbar-cta"
        >
          📞 Agendar Cita
        </a>
      </div>
    </nav>
  );
}