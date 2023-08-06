// Importamos las dependencias necesarias para realizar pruebas
import request from 'supertest';
import app from '../src/index';

describe('Pruebas de rutas en productRoutes', () => {
  // Prueba para verificar que la ruta /products responde correctamente con un código de estado 200
  it('Debe responder con código de estado 200 para la ruta /products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
  });

  // Prueba para verificar que la ruta /products responde con un array de productos en el cuerpo de la respuesta
  it('Debe responder con un array de productos para la ruta /products', async () => {
    const response = await request(app).get('/products');
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('price');
  });

  // Prueba para verificar que la ruta /products/:id responde correctamente con un código de estado 200
  it('Debe responder con código de estado 200 para la ruta /products/:id', async () => {
    const productId = 1; // Reemplazar con un ID válido existente en la base de datos
    const response = await request(app).get(`/products/${productId}`);
    expect(response.status).toBe(200);
  });

  // Prueba para verificar que la ruta /products/:id responde con un objeto de producto en el cuerpo de la respuesta
  it('Debe responder con un objeto de producto para la ruta /products/:id', async () => {
    const productId = 1; // Reemplazar con un ID válido existente en la base de datos
    const response = await request(app).get(`/products/${productId}`);
    expect(response.body).toHaveProperty('id', productId);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('price');
  });

  // Prueba para verificar que la ruta /products/:id responde con un código de estado 404 para un ID inexistente
  it('Debe responder con código de estado 404 para una ruta /products/:id con un ID inexistente', async () => {
    const nonExistentId = 9999;
    const response = await request(app).get(`/products/${nonExistentId}`);
    expect(response.status).toBe(404);
  });
});
