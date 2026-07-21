import { getImages } from '../actions/imageActions';
import FeedClient from '../components/FeedClient';

export default async function Page() {
  const images = await getImages();
  
  // Si no hay conexión a base de datos aún, mostramos datos de prueba para mantener la vista previa
  const displayImages = images.length > 0 ? images : [
    { 
      id: 1, 
      title: 'Paisaje de prueba 1 (Sin BD)',
      imageUrl: 'https://images.unsplash.com/photo-1784296868370-1020737f8faf?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: 2, 
      title: 'Arquitectura Moderna (Sin BD)',
      imageUrl: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return <FeedClient images={displayImages} />;
}
