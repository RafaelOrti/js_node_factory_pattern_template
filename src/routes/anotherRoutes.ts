import express, { Request, Response } from 'express';
import { AnotherService } from '../services/anotherService';

// Crea una instancia del enrutador de Express para las rutas de productos del tipo AnotherProduct
const router = express.Router();

// Crea una instancia del servicio de productos del tipo AnotherProduct
const anotherService = new AnotherService();

// Ruta GET para obtener todos los productos del tipo AnotherProduct
router.get('/another-products', (req: Request, res: Response) => {
  try {
    // Lógica para obtener todos los productos del tipo AnotherProduct utilizando el servicio
    const products = anotherService.getAllAnotherProducts();

    // Responder con la lista de productos del tipo AnotherProduct
    res.json(products);
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los productos' });
  }
});

// Ruta GET para obtener un producto del tipo AnotherProduct por su ID
router.get('/another-products/:id', (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);

    // Lógica para obtener un producto del tipo AnotherProduct por su ID utilizando el servicio
    const product = anotherService.getAnotherProductById(productId);

    if (product) {
      // Responder con el producto del tipo AnotherProduct encontrado
      res.json(product);
    } else {
      // Si el producto no se encuentra, responder con código de estado 404
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    res.status(500).json({ error: 'Ha ocurrido un error al obtener el producto' });
  }
});

// Exporta el enrutador para ser utilizado en otros archivos
export default router;
