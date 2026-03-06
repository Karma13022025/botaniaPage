import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function InicioTerapias() {
  return (
    <main className={styles.main}>
      {/* --- HERO PRINCIPAL --- */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>✨ Bienestar holístico</span>
          <h1 className={styles.titulo}>Armonía & Equilibrio</h1>
          <p className={styles.subtitulo}>
            Terapias holísticas y el poder de los cuarzos para restaurar tu energía vital.
          </p>
          <div className={styles.heroBotones}>
            <a href="tel:8443921858" className={styles.botonPrimario}>
              📞 Agendar Cita
            </a>
            <Link href="/cuarzos" className={styles.botonSecundario}>
              💎 Conoce los Cuarzos
            </Link>
          </div>
        </div>
      </header>

      {/* --- SERVICIOS DESTACADOS --- */}
      <section className={styles.servicios}>
        <h2 className={styles.seccionTitulo}>Nuestros Servicios</h2>
        <p className={styles.seccionSub}>
          Combinamos técnicas ancestrales con la frecuencia vibratoria de los cuarzos.
        </p>
        <div className={styles.serviciosGrid}>
          <div className={styles.servicioCard}>
            <div className={styles.servicioIcono}>💆</div>
            <h3>Masajes Terapéuticos</h3>
            <p>Técnicas relajantes con aceites esenciales para liberar la tensión muscular y devolverte la calma.</p>
            <Link href="/terapias" className={styles.servicioLink}>Conocer más →</Link>
          </div>
          <div className={styles.servicioCard}>
            <div className={styles.servicioIcono}>💎</div>
            <h3>Terapias con Cuarzos</h3>
            <p>Sesiones energéticas utilizando cristales específicos para armonizar tus centros de energía.</p>
            <Link href="/cuarzos" className={styles.servicioLink}>Conocer más →</Link>
          </div>
          <div className={styles.servicioCard}>
            <div className={styles.servicioIcono}>🧘</div>
            <h3>Alineación de Chakras</h3>
            <p>Restaura el flujo energético natural de tu cuerpo con técnicas ancestrales de sanación.</p>
            <Link href="/terapias" className={styles.servicioLink}>Conocer más →</Link>
          </div>
        </div>
      </section>

      {/* --- SOBRE NOSOTROS --- */}
      <section className={styles.sobre}>
        <div className={styles.sobreContenido}>
          <div className={styles.sobreTexto}>
            <span className={styles.sobreTag}>Sobre Nosotros</span>
            <h2 className={styles.sobreTitulo}>Un refugio para tu bienestar</h2>
            <p className={styles.sobreDesc}>
              {/* PLACEHOLDER: Reemplaza este texto con tu historia personal */}
              En Botania creemos en el poder de la naturaleza para sanar el cuerpo y
              el espíritu. Nuestro espacio holístico nació del amor por las terapias
              alternativas y la conexión profunda con la energía de los cristales.
            </p>
            <p className={styles.sobreDesc}>
              {/* PLACEHOLDER: Agrega más sobre tu experiencia y visión */}
              Con años de experiencia en terapias holísticas, te acompañamos en un
              camino de autodescubrimiento y sanación. Cada sesión es personalizada,
              porque entendemos que cada persona es única.
            </p>
            <a href="tel:8443921858" className={styles.sobreBoton}>
              Agenda tu primera sesión
            </a>
          </div>
          <div className={styles.sobreImagen}>
            <div className={styles.imagenReal} style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
              <Image src="/images/masaje-relajante.webp" alt="Masaje relajante" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} quality={75} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* --- PREVIEW DE CUARZOS --- */}
      <section className={styles.cuarzosPreview}>
        <h2 className={styles.seccionTitulo}>Conoce Nuestros Cuarzos</h2>
        <p className={styles.seccionSub}>
          Cada cristal posee una vibración única. Descubre cuál es el ideal para ti.
        </p>
        <div className={styles.cuarzosGrid}>
          <div className={styles.cuarzoMini}>
            <div className={styles.cuarzoMiniImg}>
              <Image src="/images/cristales-amatista-citrino.webp" alt="Amatista y Citrino" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={75} loading="lazy" />
            </div>
            <h4>Amatista</h4>
            <p>Paz y espiritualidad</p>
          </div>
          <div className={styles.cuarzoMini}>
            <div className={styles.cuarzoMiniImg}>
              <Image src="/images/cristales-rojos-rosas.webp" alt="Cuarzo Rosa y Carneliana" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={75} loading="lazy" />
            </div>
            <h4>Cuarzo Rosa</h4>
            <p>Amor y sanación emocional</p>
          </div>
          <div className={styles.cuarzoMini}>
            <div className={styles.cuarzoMiniImg}>
              <Image src="/images/dijes-corazon-variados.webp" alt="Dijes de Corazón" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={75} loading="lazy" />
            </div>
            <h4>Colección de Dijes</h4>
            <p>Lleva tu magia cerca</p>
          </div>
          <div className={styles.cuarzoMini}>
            <div className={styles.cuarzoMiniImg}>
              <Image src="/images/cristales-verdes-negros.webp" alt="Turmalina y Jade" fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: 'cover' }} quality={75} loading="lazy" />
            </div>
            <h4>Protección</h4>
            <p>Fuerza natural y energía</p>
          </div>
        </div>
        <Link href="/cuarzos" className={styles.verTodosBtn}>
          Ver todos los cuarzos →
        </Link>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section className={styles.testimonios}>
        <h2 className={styles.seccionTitulo}>Lo que dicen nuestros clientes</h2>
        <div className={styles.testimoniosGrid}>
          <div className={styles.testimonio}>
            <div className={styles.testimonioEstrellas}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonioTexto}>
              {/* PLACEHOLDER: Reemplaza con testimonios reales */}
              &ldquo;La sesión de masaje con cuarzos fue una experiencia transformadora.
              Salí sintiéndome renovada y en paz.&rdquo;
            </p>
            <div className={styles.testimonioAutor}>
              <div className={styles.autorAvatar}>M</div>
              <div>
                <strong>María G.</strong>
                <span>Cliente frecuente</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonio}>
            <div className={styles.testimonioEstrellas}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonioTexto}>
              &ldquo;Increíble el conocimiento sobre los cuarzos. Me ayudó a encontrar
              el cristal perfecto para mis necesidades energéticas.&rdquo;
            </p>
            <div className={styles.testimonioAutor}>
              <div className={styles.autorAvatar}>L</div>
              <div>
                <strong>Laura P.</strong>
                <span>Primera visita</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonio}>
            <div className={styles.testimonioEstrellas}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonioTexto}>
              &ldquo;La alineación de chakras cambió mi perspectiva. El ambiente es
              acogedor y profesional. Totalmente recomendado.&rdquo;
            </p>
            <div className={styles.testimonioAutor}>
              <div className={styles.autorAvatar}>R</div>
              <div>
                <strong>Roberto S.</strong>
                <span>3 sesiones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className={styles.ctaFinal}>
        <div className={styles.ctaContenido}>
          <h2 className={styles.ctaTitulo}>¿Listo para encontrar tu equilibrio?</h2>
          <p className={styles.ctaTexto}>
            Agenda tu cita y comienza tu camino hacia el bienestar integral.
            Te acompañamos en cada paso.
          </p>
          <div className={styles.ctaBotones}>
            <a href="tel:8443921858" className={styles.ctaBotonPrimario}>
              📞 Llamar Ahora
            </a>
            <a
              href="https://wa.me/528443921858?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBotonWhatsApp}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}