import { Product } from './product';
import { ProductA } from './productA';
import { ProductB } from './productB';

// Enumeración de los tipos de productos
enum ProductType {
  A = 'A',
  B = 'B',
}

export class ProductFactory {
  // Método para crear productos basados en el tipo proporcionado
  createProduct(type: ProductType, name: string, description: string): Product {
    switch (type) {
      case ProductType.A:
        return new ProductA(name, description);
      case ProductType.B:
        return new ProductB(name, description);
      default:
        throw new Error('Tipo de producto no reconocido.');
    }
  }
}
