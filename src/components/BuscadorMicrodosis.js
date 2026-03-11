'use client';

import React, { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import styles from '../app/microdosis/page.module.css';

const microdosisData = [
    { titulo: 'Fórmula AT – Artritis', descripcion: 'Optimiza riñones, hígado y sistema endocrino para el buen mantenimiento articular. Contiene plantas analgésicas y desinflamatorias. Presentación 20 ml.', imagen: { src: '/images/microdosis/formulaat.webp', alt: 'Microdosis Artritis' } },
    { titulo: 'Fórmula AU – Ácido Úrico', descripcion: 'Contribuye a disminuir los niveles de ácido úrico y a procesar las purinas de los alimentos de forma más eficiente. Presentación 20 ml.', imagen: { src: '/images/microdosis/acido-urico.webp', alt: 'Microdosis Ácido Úrico' } },
    { titulo: 'Fórmula CR – Circulación', descripcion: 'Promueve la circulación sanguínea, reduce la inflamación y es ideal para personas con problemas de várices. Presentación 20 ml.', imagen: { src: '/images/microdosis/circulacion.webp', alt: 'Microdosis Circulación' } },
    { titulo: 'Fórmula CT – Colesterol y Triglicéridos', descripcion: 'Reduce el exceso de colesterol y triglicéridos, facilita la desintegración de grasas dañinas y disminuye el riesgo cardiovascular. Presentación 20 ml.', imagen: { src: '/images/microdosis/colesterol.webp', alt: 'Microdosis Colesterol' } },
    { titulo: 'Fórmula AC – Anticáncer', descripcion: 'Reduce e impide el crecimiento tumoral en etapas iniciales y mejora el sistema inmune, ayudando a la producción correcta de anticuerpos. Presentación 20 ml.', imagen: { src: '/images/microdosis/anticancer.webp', alt: 'Microdosis Anticáncer' } },
    { titulo: 'Fórmula AE – Antiestrés', descripcion: 'Plantas medicinales relajantes con ingredientes activos de amplio espectro que inducen un estado de calma para el cuerpo y la mente. Presentación 20 ml.', imagen: { src: '/images/microdosis/antiestres.webp', alt: 'Microdosis Antiestrés' } },
    { titulo: 'Fórmula AN – Anemia', descripcion: 'Contribuye al control de la anemia. Recomendada durante una semana en mujeres post-periodo para compensar la pérdida de hierro. Presentación 20 ml.', imagen: { src: '/images/microdosis/anemia.webp', alt: 'Microdosis Anemia' } },
    { titulo: 'Fórmula DP – Depresión', descripcion: 'Contribuye a sustituir sustancias químicas faltantes como serotonina, oxitocina y endorfinas. Facilita el tratamiento sin depender de medicamentos. Presentación 20 ml.', imagen: { src: '/images/microdosis/depresion.webp', alt: 'Microdosis Depresión' } },
    { titulo: 'Fórmula DX – Depurativa', descripcion: 'Mejora la calidad de la sangre y elimina toxinas generadas por el organismo o agentes externos como medicamentos y alimentos ultra procesados. Presentación 20 ml.', imagen: { src: '/images/microdosis/detox.webp', alt: 'Microdosis Depurativa' } },
    { titulo: 'Fórmula DB – Diabetes', descripcion: 'Favorece niveles óptimos de glucosa de forma natural. Promueve el buen funcionamiento del páncreas, bazo y riñones. Ideal para prediabetes, tipo 1 y 2. Presentación 20 ml.', imagen: { src: '/images/microdosis/diabetes.webp', alt: 'Microdosis Diabetes' } },
    { titulo: 'Fórmula EG – Energizante', descripcion: 'Estimula el cerebro y optimiza la producción de energía corporal. Ideal para jornadas prolongadas de trabajo, estudio o viajes largos. Presentación 20 ml.', imagen: { src: '/images/microdosis/energizante.webp', alt: 'Microdosis Energizante' } },
    { titulo: 'Fórmula FM – Fibromialgia', descripcion: 'Plantas depurativas, antiinflamatorias y relajantes que optimizan las funciones de los órganos y alivian dolores crónicos generalizados. Presentación 20 ml.', imagen: { src: '/images/microdosis/fibromialgia.webp', alt: 'Microdosis Fibromialgia' } },
    { titulo: 'Fórmula FB – Fiebre e Infecciones', descripcion: 'Remedio herbolario alternativo y complementario que contribuye al control de la fiebre e infecciones de manera natural. Presentación 20 ml.', imagen: { src: '/images/microdosis/infecciones.webp', alt: 'Microdosis Fiebre e Infecciones' } },
    { titulo: 'Fórmula GC – Gastritis y Colitis', descripcion: 'Desinflama, limpia y tonifica el estómago e intestinos. Controla los dolores causados por irritación e inflamación. Presentación 20 ml.', imagen: { src: '/images/microdosis/gastritis.webp', alt: 'Microdosis Gastritis y Colitis' } },
    { titulo: 'Fórmula HP – Problemas Hepáticos', descripcion: 'Limpia, fortalece y protege el hígado. Promueve la regeneración celular hepática y ayuda a prevenir hepatitis, cirrosis e hígado graso. Presentación 20 ml.', imagen: { src: '/images/microdosis/hepatica.webp', alt: 'Microdosis Hepática' } },
    { titulo: 'Fórmula HS – Hipertensión', descripcion: 'Mejora el sistema circulatorio, evita el exceso de presión arterial y previene daños en arterias, riñones y ojos. Reduce riesgo de infartos. Presentación 20 ml.', imagen: { src: '/images/microdosis/hipertension.webp', alt: 'Microdosis Hipertensión' } },
    { titulo: 'Fórmula IR – Insuficiencia Renal', descripcion: 'Fortalece y optimiza el funcionamiento de los riñones. Ideal para insuficiencia e infecciones renales. Regula cambios hormonales asociados. Presentación 20 ml.', imagen: { src: '/images/microdosis/renal.webp', alt: 'Microdosis Renal' } },
    { titulo: 'Fórmula MP – Menopausia', descripcion: 'Ralentiza la disminución hormonal para aliviar síntomas intensos. Reduce la pérdida de masa muscular y los trastornos del sueño. Presentación 20 ml.', imagen: { src: '/images/microdosis/menopausia.webp', alt: 'Microdosis Menopausia' } },
    { titulo: 'Fórmula OP – Osteoporosis', descripcion: 'Ayuda al cuerpo a recuperar la capacidad de absorber nutrientes gradualmente. Ideal para osteopenia y osteoporosis. Presentación 20 ml.', imagen: { src: '/images/microdosis/osteoporosis.webp', alt: 'Microdosis Osteoporosis' } },
    { titulo: 'Fórmula PE – Problemas Estomacales', descripcion: 'Ideal para tratar acidez, indigestión, náusea, diarrea e infecciones leves causadas por alimentos en mal estado. Presentación 20 ml.', imagen: { src: '/images/microdosis/estomacales.webp', alt: 'Microdosis Estomacales' } },
    { titulo: 'Fórmula SI – Sistema Inmune', descripcion: 'Estimula y optimiza el bazo para mejorar la producción de glóbulos blancos, anticuerpos y la eliminación de glóbulos rojos dañados. Presentación 20 ml.', imagen: { src: '/images/microdosis/sistema.webp', alt: 'Microdosis Sistema Inmune' } },
    { titulo: 'Fórmula TR – Tiroides', descripcion: 'Trata la descompensación de la tiroides desde el hígado, donde se origina el problema. Regula el metabolismo y el balance hormonal. Presentación 20 ml.', imagen: { src: '/images/microdosis/tiroides.webp', alt: 'Microdosis Tiroides' } },
    { titulo: 'Fórmula VR – Vías Respiratorias', descripcion: 'Alivia escurrimiento nasal, congestión, inflamación de ganglios, dolor de cabeza y principios de bronquitis. Presentación 20 ml.', imagen: { src: '/images/microdosis/vias.webp', alt: 'Microdosis Vías Respiratorias' } },
];

export default function BuscadorMicrodosis() {
    const [busqueda, setBusqueda] = useState('');

    const normalizar = (texto) =>
        texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const resultados = microdosisData.filter((item) => {
        const termino = normalizar(busqueda);
        return (
            normalizar(item.titulo).includes(termino) ||
            normalizar(item.descripcion).includes(termino)
        );
    });

    return (
        <section className={styles.microdosis}>
            {/* --- BUSCADOR --- */}
            <div className={styles.buscadorContainer}>
                <div className={styles.buscadorWrapper}>
                    <span className={styles.buscadorIcono}>🔍</span>
                    <input
                        type="text"
                        placeholder="Busca por nombre o padecimiento... (ej. diabetes, estrés, hígado)"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className={styles.buscadorInput}
                        id="buscador-microdosis"
                    />
                    {busqueda && (
                        <button
                            onClick={() => setBusqueda('')}
                            className={styles.buscadorLimpiar}
                            aria-label="Limpiar búsqueda"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <p className={styles.buscadorConteo}>
                    {resultados.length === microdosisData.length
                        ? `Mostrando las ${microdosisData.length} fórmulas disponibles`
                        : `${resultados.length} fórmula${resultados.length !== 1 ? 's' : ''} encontrada${resultados.length !== 1 ? 's' : ''}`}
                </p>
            </div>

            {/* --- GRID --- */}
            {resultados.length > 0 ? (
                <div className={styles.microdosisGrid}>
                    {resultados.map((item, index) => (
                        <Tarjeta
                            key={item.titulo}
                            titulo={item.titulo}
                            descripcion={item.descripcion}
                            textoBoton="Pedir Información"
                            imagen={item.imagen}
                            priority={index < 3}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.sinResultados}>
                    <span className={styles.sinResultadosIcono}>🌱</span>
                    <h3>No encontramos esa fórmula</h3>
                    <p>Prueba con otro término o contáctanos para asesorarte personalmente.</p>
                    <a
                        href="https://wa.me/528443921858?text=Hola%2C%20busco%20una%20microdosis%20para..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sinResultadosBoton}
                    >
                        💬 Pregúntanos por WhatsApp
                    </a>
                </div>
            )}
        </section>
    );
}
