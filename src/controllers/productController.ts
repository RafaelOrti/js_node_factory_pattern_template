import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

// Crea una instancia del servicio de productos
const productService = new ProductService();

// Controlador para obtener todos los productos
export const getAllProducts = (req: Request, res: Response) => {
  try {
    // Lógica para obtener todos los productos utilizando el servicio de productos
    const products = productService.getAllProducts();

    // Responder con la lista de productos
    res.json(products);
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los productos' });
  }
};

// Controlador para obtener un producto por su ID
export const getProductById = (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);

    // Lógica para obtener un producto por su ID utilizando el servicio de productos
    const product = productService.getProductById(productId);

    if (product) {
      // Responder con el producto encontrado
      res.json(product);
    } else {
      // Si el producto no se encuentra, responder con código de estado 404
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    res.status(500).json({ error: 'Ha ocurrido un error al obtener el producto' });
  }
};
