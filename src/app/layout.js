import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

// 1. Descargamos y configuramos las fuentes
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

const lato = Lato({ 
  weight: ['300', '400', '700'], 
  subsets: ['latin'], 
  variable: '--font-lato' 
});

// 2. Aquí está la magia del SEO automático de Next.js
export const metadata = {
  title: 'Terapias Holísticas y Cuarzos',
  description: 'Encuentra tu centro. Masajes relajantes y venta de cuarzos para sanar tu energía.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* 3. Inyectamos las fuentes en todo el cuerpo de la página */}
      <body className={`${playfair.variable} ${lato.variable}`}>
        {/* Aquí adentro va a ir tu Navbar más adelante */}
        {children}
        {/* Y aquí abajo irá tu Footer */}
      </body>
    </html>
  );
}