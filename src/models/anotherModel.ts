export class AnotherModel {
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  // Métodos getters para obtener el nombre y descripción del modelo
  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  // Otros métodos y propiedades relacionados con el modelo, según sea necesario
}
