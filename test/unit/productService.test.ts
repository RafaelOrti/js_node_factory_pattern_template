import { ProductService } from '../src/services/productService';
import { ProductA } from '../src/products/productA';
import { ProductB } from '../src/products/productB';

describe('Pruebas del Product Service', () => {
  it('Debe crear una instancia válida de ProductA utilizando ProductService', () => {
    const service = new ProductService();
    const product = service.createProduct('A');

    expect(product).toBeInstanceOf(ProductA);
    expect(product.getName()).toBe('Product A');
    expect(product.getDescription()).toBe('This is Product A');
  });

  it('Debe crear una instancia válida de ProductB utilizando ProductService', () => {
    const service = new ProductService();
    const product = service.createProduct('B');

    expect(product).toBeInstanceOf(ProductB);
    expect(product.getName()).toBe('Product B');
    expect(product.getDescription()).toBe('This is Product B');
  });

  it('Debe devolver null si se pasa un tipo de producto desconocido a ProductService', () => {
    const service = new ProductService();
    const product = service.createProduct('C');

    expect(product).toBeNull();
  });
});
