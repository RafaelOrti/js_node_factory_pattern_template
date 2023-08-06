// Importamos las dependencias necesarias para realizar pruebas
import request from 'supertest';
import app from '../src/index';

describe('Pruebas de rutas en anotherRoutes', () => {
  // Prueba para verificar que la ruta /another responde correctamente con un código de estado 200
  it('Debe responder con código de estado 200 para la ruta /another', async () => {
    const response = await request(app).get('/another');
    expect(response.status).toBe(200);
  });

  // Prueba para verificar que la ruta /another responde con el mensaje correcto
  it('Debe responder con el mensaje correcto para la ruta /another', async () => {
    const response = await request(app).get('/another');
    expect(response.body).toHaveProperty('message', 'Esta es otra ruta');
  });

  // Prueba para verificar que la ruta /nonexistent responde con un código de estado 404
  it('Debe responder con código de estado 404 para una ruta inexistente', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
