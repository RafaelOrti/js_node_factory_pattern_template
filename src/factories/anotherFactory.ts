import { AnotherProductA } from './anotherProductA';
import { AnotherProductB } from './anotherProductB';
import { AnotherModel } from './anotherModel';

// Enumeración de los tipos de productos para AnotherFactory
enum AnotherProductType {
  A = 'A',
  B = 'B',
  Model = 'Model',
}

export class AnotherFactory {
  // Método para crear productos basados en el tipo proporcionado
  createAnotherProduct(type: AnotherProductType, name: string, description: string) {
    switch (type) {
      case AnotherProductType.A:
        return new AnotherProductA(name, description);
      case AnotherProductType.B:
        return new AnotherProductB(name, description);
      case AnotherProductType.Model:
        return new AnotherModel(name, description);
      default:
        throw new Error('Tipo de producto no reconocido para AnotherFactory.');
    }
  }
}
