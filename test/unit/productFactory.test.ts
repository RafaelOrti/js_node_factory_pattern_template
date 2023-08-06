import { ProductFactory } from '../src/factories/productFactory';
import { ProductA } from '../src/products/productA';
import { ProductB } from '../src/products/productB';

describe('Pruebas del Product Factory', () => {
  it('Debe crear una instancia válida de ProductA utilizando ProductFactory', () => {
    const factory = new ProductFactory();
    const product = factory.createProduct('A');

    expect(product).toBeInstanceOf(ProductA);
    expect(product.getName()).toBe('Product A');
    expect(product.getDescription()).toBe('This is Product A');
  });

  it('Debe crear una instancia válida de ProductB utilizando ProductFactory', () => {
    const factory = new ProductFactory();
    const product = factory.createProduct('B');

    expect(product).toBeInstanceOf(ProductB);
    expect(product.getName()).toBe('Product B');
    expect(product.getDescription()).toBe('This is Product B');
  });

  it('Debe devolver null si se pasa un tipo de producto desconocido a ProductFactory', () => {
    const factory = new ProductFactory();
    const product = factory.createProduct('C');

    expect(product).toBeNull();
  });
});
