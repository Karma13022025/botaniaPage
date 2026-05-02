import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Tipografías globales configuradas como CSS custom properties.
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

// Metadata base para todo el sitio (SEO y redes sociales).
export const metadata = {
  title: {
    default: 'Raíces de Luz | Terapias Holísticas y Cuarzos en Saltillo',
    template: '%s | Raíces de Luz',
  },
  description: 'Descubre el poder de los cuarzos y las terapias holísticas en Saltillo, Coahuila. Masajes, alineación de chakras, aromaterapia y más. Agenda tu cita: 844-392-1858.',
  keywords: [
    'terapias holísticas',
    'cuarzos',
    'cristales',
    'masajes terapéuticos',
    'chakras',
    'bienestar',
    'energía',
    'Saltillo',
    'Coahuila',
    'reiki',
    'aromaterapia',
    'piedras calientes',
    'reflexología',
    'sanación energética',
    'meditación',
    'microdosis',
    'herbolaria',
    'medicina natural',
    'microdosis herbolarias',
    'plantas medicinales',
    'remedios naturales',
  ],
  authors: [{ name: 'Raíces de Luz' }],
  creator: 'Raíces de Luz',
  publisher: 'Raíces de Luz',
  metadataBase: new URL('https://raicesdeluz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Raíces de Luz | Terapias Holísticas y Cuarzos en Saltillo',
    description: 'Descubre el poder de los cuarzos y las terapias holísticas. Masajes, chakras, aromaterapia y más. Agenda tu cita.',
    url: 'https://raicesdeluz.com',
    siteName: 'Raíces de Luz',
    images: [
      {
        url: '/vista-previa.jpg', // El nombre de la imagen que guardaste en la carpeta public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raíces de Luz | Terapias Holísticas y Cuarzos',
    description: 'Terapias holísticas, cuarzos y bienestar integral en Saltillo. Agenda tu cita: 844-392-1858.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  category: 'health',
};

// JSON-LD Structured Data para negocio local.
// IMPORTANTE: Actualizar dirección, horarios y redes cuando se tenga la información final.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Raíces de Luz',
  description: 'Terapias holísticas, cuarzos y bienestar integral en Saltillo, Coahuila. Masajes terapéuticos, alineación de chakras, reiki y más.',
  url: 'https://raicesdeluz.com',
  telephone: '+528443921858',
  address: {
    '@type': 'PostalAddress',
    // PLACEHOLDER: Actualiza con la dirección real
    addressLocality: 'Saltillo',
    addressRegion: 'Coahuila',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // PLACEHOLDER: Actualiza con coordenadas reales
    latitude: 25.4232,
    longitude: -100.9924,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      // PLACEHOLDER: Actualiza con horarios reales
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  priceRange: '$$',
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Terapias Holísticas',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Masaje Relajante',
          description: 'Terapia suave con aceites esenciales para liberar tensión muscular.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alineación de Chakras',
          description: 'Sesión energética con cuarzos para restaurar el flujo vital.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Piedras Calientes',
          description: 'Técnica milenaria con piedras volcánicas para descontracturar músculos.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reiki',
          description: 'Canalización de energía universal para armonizar cuerpo y mente.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aromaterapia',
          description: 'Uso terapéutico de aceites esenciales para bienestar integral.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Microdosis de Herbolaria',
          description: 'Extractos naturales concentrados para ansiedad, descanso y digestión.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Cuarzos Energéticos',
          description: 'Selección de cristales y piedras naturales para equilibrio y protección.',
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}