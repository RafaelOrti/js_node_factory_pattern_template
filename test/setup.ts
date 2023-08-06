// Configuración de variables de entorno de prueba
process.env.NODE_ENV = 'test';

// Configuración de supertest para hacer peticiones HTTP en las pruebas
import request from 'supertest';
import app from './src/index';

// Configuración opcional de un tiempo máximo para las pruebas asincrónicas (opcional)
jest.setTimeout(15000); // 15 segundos

// Configuración global para supertest, para utilizar la aplicación de prueba en todas las pruebas
global.app = app;
global.request = request(app);

// Configuración adicional de Jest (opcional)
// Aquí puedes configurar otras bibliotecas o personalizar Jest según tus necesidades de prueba.
// Por ejemplo, puedes utilizar librerías para mocks, spies o configurar cobertura de código.
