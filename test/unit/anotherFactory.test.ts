import { AnotherFactory } from '../src/factories/anotherFactory';

describe('Pruebas del Another Factory', () => {
  it('Debe crear una instancia válida de AnotherProductA', () => {
    const factory = new AnotherFactory();
    const product = factory.createProduct('A');

    expect(product).toBeDefined();
    expect(product.getName()).toBe('Product A');
    expect(product.getDescription()).toBe('This is Product A');
  });

  it('Debe crear una instancia válida de AnotherProductB', () => {
    const factory = new AnotherFactory();
    const product = factory.createProduct('B');

    expect(product).toBeDefined();
    expect(product.getName()).toBe('Product B');
    expect(product.getDescription()).toBe('This is Product B');
  });

  it('Debe devolver null si se pasa un tipo de producto desconocido', () => {
    const factory = new AnotherFactory();
    const product = factory.createProduct('C');

    expect(product).toBeNull();
  });
});
