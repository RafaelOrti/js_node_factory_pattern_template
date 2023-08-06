# Factory Pattern - Factory Design Pattern Example in Node.js

## Description

This project is an example of implementing the Factory Design Pattern in Node.js. The Factory pattern is used to create objects without explicitly specifying the exact class of the object to be created. 

The Factory pattern is a creational design pattern that provides an interface for creating objects but allows subclasses to decide which class to instantiate. It promotes loose coupling by abstracting the object creation process from the client code.

Key components of the Factory pattern:

1. Factory Interface: Defines the interface for creating objects. This can be an abstract class or an interface that declares a factory method (a method responsible for creating objects).

2. Concrete Factories: Subclasses that implement the factory interface and provide the actual implementation for creating specific objects. Each subclass may create different types of objects based on the requirements.

3. Product Interface: Declares the interface for the products (objects) that the factory creates. This can be an abstract class or an interface shared by the different product classes.

4. Concrete Products: Classes that implement the product interface and represent the various types of objects created by the factory.

In this project, it is shown how the Factory Pattern can be used to create different types of products without knowing the internal details of its creation.

## Facility

1. Clone the repository:
```
git clone https://github.com/yourusername/factory-pattern-nodejs.git
```

2. Install the dependencies:
```shell
cd-factory-pattern-nodejs
yarn install
```

3. Run the application:
```shell
yarn start
```

## Folder Structure

The project folder structure is as follows:
```shell
factory-pattern-nodejs/
├── .github/
│ └── workflows/
│ └── ci.yml
├── .gitignore
├── .editorconfig
├── .eslintrc.json
├── .prettierrc.json
├── .yarnrc
├── .npmrc
├── .npmignore
├── .lintstagedrc.json
├── SECURITY.md
├── CONTRIBUTING.md
├── ISSUE_TEMPLATE.md
├── PULL_REQUEST_TEMPLATE.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── package.json
├── yarn.lock
├── src/
│ ├── factories/
│ │ ├── productFactory.js
│ │ └── ...
│ ├── products/
│ │ ├── product.js
│ │ └── ...
│ └── index.js
├── tests/
│ ├── factory.test.js
│ └── ...
└── documents/
└── README.md
```

## Documentation

For more detailed documentation on how the Factory Design Pattern implemented in this project works and how to use it, see ./docs/README.md.

## Contribution

Your contributions are welcome! If you want to contribute to this project, please see ./CONTRIBUTING.md and ./CODE_OF_CONDUCT.md.


## License

This project is licensed under the MIT License - see the ./LICENSE file for details.
