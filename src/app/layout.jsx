import '../index.css';
import '../App.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mi Galería',
  description: 'Galería de imágenes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
