'use server';

import { getConnection } from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function getImages() {
  try {
    const db = await getConnection();
    const [rows] = await db.query('SELECT * FROM images ORDER BY id DESC');
    return rows;
  } catch (error) {
    console.error('Error fetching images:', error);
    // Para modo desarrollo/fallback si la BD no está configurada, retornamos datos vacíos
    return [];
  }
}

export async function addImage(title, imageUrl) {
  try {
    const db = await getConnection();
    await db.query('INSERT INTO images (title, imageUrl) VALUES (?, ?)', [title, imageUrl]);
    revalidatePath('/'); // Recargar la página principal para ver la nueva imagen
    return { success: true };
  } catch (error) {
    console.error('Error adding image:', error);
    return { success: false, error: 'Error al guardar la imagen' };
  }
}
