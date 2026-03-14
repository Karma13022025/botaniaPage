/**
 * Configuración de robots.txt usando la API de Next.js App Router.
 * Ajustar reglas o sitemap si cambia el dominio base.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://raicesdeluz.com/sitemap.xml',
  };
}
