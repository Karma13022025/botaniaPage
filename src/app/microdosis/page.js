import React from 'react';
import styles from './page.module.css';
import Tarjeta from '../../components/Tarjeta';

export const metadata = {
    title: 'Microdosis Herbolarias',
    description: 'Conoce nuestras microdosis naturales en Saltillo. Fórmulas herbolarias para artritis, diabetes, estrés, circulación, colesterol y más.',
    alternates: { canonical: '/microdosis' },
    openGraph: {
        title: 'Microdosis Herbolarias | Botania',
        description: 'Microdosis naturales para tu bienestar. Medicina herbolaria de alta calidad para mejorar tu calidad de vida.',
        url: '/microdosis',
    },
};

export default function Microdosis() {
    return (
        <main className={styles.contenedor}>
            {/* --- HERO --- */}
            <section className={styles.hero}>
                <span className={styles.heroTag}>🌿 Medicina natural</span>
                <h1 className={styles.titulo}>Microdosis Herbolarias</h1>
                <p className={styles.descripcion}>
                    Extractos naturales altamente concentrados que te ayudan a recuperar
                    el equilibrio físico y emocional, de manera segura y sin efectos secundarios.
                </p>
            </section>

            {/* --- GRID DE MICRODOSIS --- */}
            <section className={styles.microdosis}>
                <div className={styles.microdosisGrid}>
                    <Tarjeta
                        titulo="Fórmula AT – Artritis"
                        descripcion="Optimiza riñones, hígado y sistema endocrino para el buen mantenimiento articular. Contiene plantas analgésicas y desinflamatorias. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/formulaat.webp', alt: 'Microdosis Artritis' }}
                        priority={true}
                    />

                    <Tarjeta
                        titulo="Fórmula AU – Ácido Úrico"
                        descripcion="Contribuye a disminuir los niveles de ácido úrico y a procesar las purinas de los alimentos de forma más eficiente. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/acido-urico.webp', alt: 'Microdosis Ácido Úrico' }}
                        priority={true}
                    />

                    <Tarjeta
                        titulo="Fórmula CR – Circulación"
                        descripcion="Promueve la circulación sanguínea, reduce la inflamación y es ideal para personas con problemas de várices. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/circulacion.webp', alt: 'Microdosis Circulación' }}
                        priority={true}
                    />

                    <Tarjeta
                        titulo="Fórmula CT – Colesterol y Triglicéridos"
                        descripcion="Reduce el exceso de colesterol y triglicéridos, facilita la desintegración de grasas dañinas y disminuye el riesgo cardiovascular. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/colesterol.webp', alt: 'Microdosis Colesterol' }}
                    />

                    <Tarjeta
                        titulo="Fórmula AC – Anticáncer"
                        descripcion="Reduce e impide el crecimiento tumoral en etapas iniciales y mejora el sistema inmune, ayudando a la producción correcta de anticuerpos. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/anticancer.webp', alt: 'Microdosis Anticáncer' }}
                    />

                    <Tarjeta
                        titulo="Fórmula AE – Antiestrés"
                        descripcion="Plantas medicinales relajantes con ingredientes activos de amplio espectro que inducen un estado de calma para el cuerpo y la mente. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/antiestres.webp', alt: 'Microdosis Antiestrés' }}
                    />

                    <Tarjeta
                        titulo="Fórmula AN – Anemia"
                        descripcion="Contribuye al control de la anemia. Recomendada durante una semana en mujeres post-periodo para compensar la pérdida de hierro. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/anemia.webp', alt: 'Microdosis Anemia' }}
                    />

                    <Tarjeta
                        titulo="Fórmula DP – Depresión"
                        descripcion="Contribuye a sustituir sustancias químicas faltantes como serotonina, oxitocina y endorfinas. Facilita el tratamiento sin depender de medicamentos. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/depresion.webp', alt: 'Microdosis Depresión' }}
                    />

                    <Tarjeta
                        titulo="Fórmula DX – Depurativa"
                        descripcion="Mejora la calidad de la sangre y elimina toxinas generadas por el organismo o agentes externos como medicamentos y alimentos ultra procesados. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/detox.webp', alt: 'Microdosis Depurativa' }}
                    />

                    <Tarjeta
                        titulo="Fórmula DB – Diabetes"
                        descripcion="Favorece niveles óptimos de glucosa de forma natural. Promueve el buen funcionamiento del páncreas, bazo y riñones. Ideal para prediabetes, tipo 1 y 2. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/diabetes.webp', alt: 'Microdosis Diabetes' }}
                    />

                    <Tarjeta
                        titulo="Fórmula EG – Energizante"
                        descripcion="Estimula el cerebro y optimiza la producción de energía corporal. Ideal para jornadas prolongadas de trabajo, estudio o viajes largos. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/energizante.webp', alt: 'Microdosis Energizante' }}
                    />

                    <Tarjeta
                        titulo="Fórmula FM – Fibromialgia"
                        descripcion="Plantas depurativas, antiinflamatorias y relajantes que optimizan las funciones de los órganos y alivian dolores crónicos generalizados. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/fibromialgia.webp', alt: 'Microdosis Fibromialgia' }}
                    />

                    <Tarjeta
                        titulo="Fórmula FB – Fiebre e Infecciones"
                        descripcion="Remedio herbolario alternativo y complementario que contribuye al control de la fiebre e infecciones de manera natural. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/infecciones.webp', alt: 'Microdosis Fiebre e Infecciones' }}
                    />

                    <Tarjeta
                        titulo="Fórmula GC – Gastritis y Colitis"
                        descripcion="Desinflama, limpia y tonifica el estómago e intestinos. Controla los dolores causados por irritación e inflamación. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/gastritis.webp', alt: 'Microdosis Gastritis y Colitis' }}
                    />

                    <Tarjeta
                        titulo="Fórmula HP – Problemas Hepáticos"
                        descripcion="Limpia, fortalece y protege el hígado. Promueve la regeneración celular hepática y ayuda a prevenir hepatitis, cirrosis e hígado graso. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/hepatica.webp', alt: 'Microdosis Hepática' }}
                    />

                    <Tarjeta
                        titulo="Fórmula HS – Hipertensión"
                        descripcion="Mejora el sistema circulatorio, evita el exceso de presión arterial y previene daños en arterias, riñones y ojos. Reduce riesgo de infartos. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/hipertension.webp', alt: 'Microdosis Hipertensión' }}
                    />

                    <Tarjeta
                        titulo="Fórmula IR – Insuficiencia Renal"
                        descripcion="Fortalece y optimiza el funcionamiento de los riñones. Ideal para insuficiencia e infecciones renales. Regula cambios hormonales asociados. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/renal.webp', alt: 'Microdosis Renal' }}
                    />

                    <Tarjeta
                        titulo="Fórmula MP – Menopausia"
                        descripcion="Ralentiza la disminución hormonal para aliviar síntomas intensos. Reduce la pérdida de masa muscular y los trastornos del sueño. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/menopausia.webp', alt: 'Microdosis Menopausia' }}
                    />

                    <Tarjeta
                        titulo="Fórmula OP – Osteoporosis"
                        descripcion="Ayuda al cuerpo a recuperar la capacidad de absorber nutrientes gradualmente. Ideal para osteopenia y osteoporosis. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/osteoporosis.webp', alt: 'Microdosis Osteoporosis' }}
                    />

                    <Tarjeta
                        titulo="Fórmula PE – Problemas Estomacales"
                        descripcion="Ideal para tratar acidez, indigestión, náusea, diarrea e infecciones leves causadas por alimentos en mal estado. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/estomacales.webp', alt: 'Microdosis Estomacales' }}
                    />

                    <Tarjeta
                        titulo="Fórmula SI – Sistema Inmune"
                        descripcion="Estimula y optimiza el bazo para mejorar la producción de glóbulos blancos, anticuerpos y la eliminación de glóbulos rojos dañados. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/sistema.webp', alt: 'Microdosis Sistema Inmune' }}
                    />

                    <Tarjeta
                        titulo="Fórmula TR – Tiroides"
                        descripcion="Trata la descompensación de la tiroides desde el hígado, donde se origina el problema. Regula el metabolismo y el balance hormonal. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/tiroides.webp', alt: 'Microdosis Tiroides' }}
                    />

                    <Tarjeta
                        titulo="Fórmula VR – Vías Respiratorias"
                        descripcion="Alivia escurrimiento nasal, congestión, inflamación de ganglios, dolor de cabeza y principios de bronquitis. Presentación 20 ml."
                        textoBoton="Pedir Información"
                        imagen={{ src: '/images/microdosis/vias.webp', alt: 'Microdosis Vías Respiratorias' }}
                    />
                </div>
            </section>

            {/* --- CTA --- */}
            <section className={styles.cta}>
                <h2>¿Qué microdosis necesitas?</h2>
                <p>Contáctanos para recomendarte la fórmula ideal según tus necesidades y sintomatología.</p>
                <div className={styles.ctaBotones}>
                    <a href="tel:8443921858" className={styles.ctaBoton}>📞 Llamar Ahora</a>
                    <a
                        href="https://wa.me/528443921858?text=Hola%2C%20quisiera%20pedir%20informaci%C3%B3n%20sobre%20las%20microdosis"
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
