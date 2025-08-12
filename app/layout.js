import './globals.css';

export const metadata = {
  title: 'EDUAIFY',
  description: 'Plataforma de creación de cursos con IA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
