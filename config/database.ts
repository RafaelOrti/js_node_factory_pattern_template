import mysql from 'mysql2/promise';

// Configuración de la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'db_user',
  password: 'db_password',
  database: 'my_database',
};

// Crear una conexión a la base de datos
export const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión a la base de datos establecida correctamente.');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    throw error;
  }
};

// Cerrar la conexión a la base de datos
export const closeConnection = async (connection: mysql.Connection) => {
  try {
    await connection.end();
    console.log('Conexión a la base de datos cerrada correctamente.');
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error.message);
    throw error;
  }
};
