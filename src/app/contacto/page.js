import React from 'react';
import styles from './page.module.css';

export const metadata = {
    title: 'Contacto y Citas',
    description: 'Agenda tu cita de terapia holística o consulta sobre cuarzos en Saltillo. Llámanos al 844-392-1858 o envíanos un WhatsApp.',
    alternates: { canonical: '/contacto' },
    openGraph: {
        title: 'Contacto y Citas | Botania',
        description: 'Agenda tu cita de terapia holística. Llámanos o envíanos WhatsApp al 844-392-1858.',
        url: '/contacto',
    },
};

export default function Contacto() {
    return (
        <main className={styles.contenedor}>
            {/* --- HERO --- */}
            <section className={styles.hero}>
                <span className={styles.heroTag}>📞 Estamos para ti</span>
                <h1 className={styles.titulo}>Agenda tu Cita</h1>
                <p className={styles.descripcion}>
                    Estamos listos para acompañarte en tu camino hacia el bienestar.
                    Contáctanos y agenda tu sesión personalizada.
                </p>
            </section>

            {/* --- CTAs PRINCIPALES --- */}
            <section className={styles.ctaPrincipal}>
                <div className={styles.ctaGrid}>
                    <a href="tel:8443921858" className={styles.ctaCard} id="cta-llamar">
                        <div className={styles.ctaIcono}>📞</div>
                        <h2>Llámanos</h2>
                        <p className={styles.ctaNumero}>844-392-1858</p>
                        <span className={styles.ctaSubtext}>Toca para llamar directamente</span>
                    </a>
                    <a
                        href="https://wa.me/528443921858?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.ctaCard} ${styles.ctaWhatsApp}`}
                        id="cta-whatsapp"
                    >
                        <div className={styles.ctaIcono}>💬</div>
                        <h2>WhatsApp</h2>
                        <p className={styles.ctaNumero}>844-392-1858</p>
                        <span className={styles.ctaSubtext}>Envía un mensaje ahora</span>
                    </a>
                </div>
            </section>

            {/* --- INFORMACIÓN DE CONTACTO --- */}
            <section className={styles.infoContacto}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitulo}>📍 Ubicación</h3>
                        {/* PLACEHOLDER: Reemplaza con tu dirección real */}
                        <p>Saltillo, Coahuila</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitulo}>🕐 Horarios</h3>
                        {/* PLACEHOLDER: Reemplaza con tus horarios reales */}
                        <p>Sabados y Domingos: 10:00 AM - 7:00 PM</p>
                        <p className={styles.infoDetalle}>Lunes a Viernes: Cerrado</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3 className={styles.infoTitulo}>✉️ Email</h3>
                        {/* PLACEHOLDER: Reemplaza con tu email real */}
                        <p>hola@botania.com</p>
                        <p className={styles.infoDetalle}>Respondemos en máximo 24 horas</p>
                    </div>
                </div>
            </section>

            {/* --- FAQ RÁPIDO --- */}
            <section className={styles.faq}>
                <h2 className={styles.faqTitulo}>Preguntas Frecuentes</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqCard}>
                        <h3>¿Necesito cita previa?</h3>
                        {/* PLACEHOLDER */}
                        <p>Sí, todas nuestras sesiones son con cita previa para garantizar una atención personalizada y dedicada.</p>
                    </div>
                    <div className={styles.faqCard}>
                        <h3>¿Cuánto dura una sesión?</h3>
                        {/* PLACEHOLDER */}
                        <p>Las sesiones varían de 45 minutos a 1.5 horas dependiendo de la terapia seleccionada.</p>
                    </div>
                    <div className={styles.faqCard}>
                        <h3>¿Qué debo llevar?</h3>
                        {/* PLACEHOLDER */}
                        <p>Solo necesitas traer ropa cómoda y una actitud abierta. Nosotros nos encargamos del resto.</p>
                    </div>
                    <div className={styles.faqCard}>
                        <h3>¿Trabajan con citas en línea?</h3>
                        {/* PLACEHOLDER */}
                        <p>Por el momento todas nuestras sesiones son presenciales para poder brindarte la mejor experiencia.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
