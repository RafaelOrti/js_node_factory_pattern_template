# Factory Pattern - Ejemplo de Patrón de Diseño Factory en Node.js

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Coverage Status](https://coveralls.io/repos/github/tuusuario/factory-pattern-nodejs/badge.svg?branch=main)
![Contributors](https://img.shields.io/github/contributors/tuusuario/factory-pattern-nodejs)
![Latest Release](https://img.shields.io/github/v/release/tuusuario/factory-pattern-nodejs)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## Descripción

Este proyecto es un ejemplo de implementación del Patrón de Diseño Factory en Node.js. El patrón Factory se utiliza para crear objetos sin especificar explícitamente la clase exacta del objeto que se creará. En este proyecto, se muestra cómo se puede utilizar el Factory Pattern para crear diferentes tipos de productos sin conocer los detalles internos de su creación.

## Instalación

1. Clona el repositorio:
```
git clone https://github.com/tuusuario/factory-pattern-nodejs.git
```

2. Instala las dependencias:
```shell
cd factory-pattern-nodejs
yarn install
```

3. Ejecuta la aplicación:
```shell
yarn start
```

## Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:
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
└── docs/
└── README.md
```

## Documentación

Para obtener una documentación más detallada sobre cómo funciona el Patrón de Diseño Factory implementado en este proyecto y cómo utilizarlo, consulta la [documentación](./docs/README.md).

## Contribución

¡Tus contribuciones son bienvenidas! Si quieres contribuir a este proyecto, por favor consulta ./CONTRIBUTING.md yb./CODE_OF_CONDUCT.md.


## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo ./LICENSE para más detalles.
