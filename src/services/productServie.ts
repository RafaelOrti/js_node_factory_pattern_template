import { ProductA } from '../products/productA';
import { ProductB } from '../products/productB';

export class ProductService {
  // Método para crear productos específicos basados en el tipo proporcionado
  createProduct(type: string) {
    switch (type) {
      case 'A':
        return new ProductA();
      case 'B':
        return new ProductB();
      default:
        return null;
    }
  }
}
