import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
};
const databaseName = process.env.DB_NAME || 'galeria';

let pool;

async function initializeDatabase() {
  // 1. Conectar al servidor MySQL (sin seleccionar base de datos) para crearla si no existe
  const connection = await mysql.createConnection(dbConfig);
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
  await connection.end();

  // 2. Crear el pool de conexiones ya conectado a la base de datos específica
  pool = mysql.createPool({
    ...dbConfig,
    database: databaseName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // 3. Crear la tabla de imágenes si no existe
  await pool.query(`
    CREATE TABLE IF NOT EXISTS images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      imageUrl VARCHAR(500) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export async function getConnection() {
  if (!pool) {
    await initializeDatabase();
  }
  return pool;
}
