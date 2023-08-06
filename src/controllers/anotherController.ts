import { Request, Response } from 'express';
import { AnotherFactory } from '../factories';

// Controlador para obtener todos los productos del tipo AnotherProduct
export const getAllAnotherProducts = (req: Request, res: Response) => {
  try {
    // Lógica para obtener todos los productos del tipo AnotherProduct utilizando la AnotherFactory
    const anotherFactory = new AnotherFactory();
    const anotherProductA = anotherFactory.createAnotherProduct('A', 'Another Product A', 'This is Another Product A.');
    const anotherProductB = anotherFactory.createAnotherProduct('B', 'Another Product B', 'This is Another Product B.');
    const products = [anotherProductA, anotherProductB];

    // Responder con la lista de productos del tipo AnotherProduct
    res.json(products);
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los productos' });
  }
};

// Controlador para obtener un producto del tipo AnotherProduct por su ID
export const getAnotherProductById = (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);

    // Lógica para obtener un producto del tipo AnotherProduct por su ID utilizando la AnotherFactory
    const anotherFactory = new AnotherFactory();
    const product = anotherFactory.createAnotherProduct('A', 'Another Product A', 'This is Another Product A.');
    // Aquí deberías utilizar una lógica adecuada para obtener el producto correspondiente por su ID.

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
};
