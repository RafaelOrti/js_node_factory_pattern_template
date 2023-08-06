import { AnotherProductA } from '../products/anotherProductA';
import { AnotherProductB } from '../products/anotherProductB';

export class AnotherService {
  // Método para crear productos específicos basados en el tipo proporcionado
  createProduct(type: string) {
    switch (type) {
      case 'A':
        return new AnotherProductA();
      case 'B':
        return new AnotherProductB();
      default:
        return null;
    }
  }
}
