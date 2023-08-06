export abstract class Product {
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  // Métodos getters para obtener el nombre y descripción del producto
  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  // Método abstracto para ser implementado por las clases hijas
  abstract doSomething(): void;
}
