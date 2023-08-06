import { AnotherService } from '../src/services/anotherService';
import { AnotherProductA } from '../src/products/anotherProductA';
import { AnotherProductB } from '../src/products/anotherProductB';

describe('Pruebas del Another Service', () => {
  it('Debe crear una instancia válida de AnotherProductA utilizando AnotherService', () => {
    const service = new AnotherService();
    const product = service.createProduct('A');

    expect(product).toBeInstanceOf(AnotherProductA);
    expect(product.getName()).toBe('Product A');
    expect(product.getDescription()).toBe('This is Product A');
  });

  it('Debe crear una instancia válida de AnotherProductB utilizando AnotherService', () => {
    const service = new AnotherService();
    const product = service.createProduct('B');

    expect(product).toBeInstanceOf(AnotherProductB);
    expect(product.getName()).toBe('Product B');
    expect(product.getDescription()).toBe('This is Product B');
  });

  it('Debe devolver null si se pasa un tipo de producto desconocido a AnotherService', () => {
    const service = new AnotherService();
    const product = service.createProduct('C');

    expect(product).toBeNull();
  });
});
