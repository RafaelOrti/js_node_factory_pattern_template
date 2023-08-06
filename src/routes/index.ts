import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import productRoutes from './routes/productRoutes';

// Crea una instancia de Express para la aplicación
const app = express();

// Configuraciones de middlewares
app.use(cors()); // Habilita el acceso desde diferentes orígenes (Cross-Origin Resource Sharing)
app.use(morgan('dev')); // Muestra los logs de las solicitudes en la consola
app.use(helmet()); // Agrega medidas de seguridad de cabeceras HTTP
app.use(compression()); // Comprime las respuestas para mejorar el rendimiento

// Agrega las rutas relacionadas con los productos
app.use('/api', productRoutes);

// Configuración del puerto en el que se ejecutará la aplicación
const port = process.env.PORT || 3000;

// Inicia el servidor web y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
