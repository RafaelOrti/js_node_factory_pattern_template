import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

// Importa aquí otros módulos y middlewares necesarios para tu aplicación.

// Crea una instancia de Express para la aplicación
const app: Express = express();

// Configuraciones de middlewares
app.use(cors()); // Habilita el acceso desde diferentes orígenes (Cross-Origin Resource Sharing)
app.use(morgan('dev')); // Muestra los logs de las solicitudes en la consola
app.use(helmet()); // Agrega medidas de seguridad de cabeceras HTTP
app.use(compression()); // Comprime las respuestas para mejorar el rendimiento

// Define aquí las rutas de tu aplicación
app.get('/', (req: Request, res: Response) => {
  res.send('¡Bienvenido a mi aplicación!');
});

// Define más rutas y lógica de la aplicación según sea necesario.

// Configuración del puerto en el que se ejecutará la aplicación
const port = process.env.PORT || 3000;

// Inicia el servidor web y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});

export default app;
