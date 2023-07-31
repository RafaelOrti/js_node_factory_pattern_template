const path = require('path');

module.exports = {
  entry: './src/app.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos generados
    filename: 'bundle.js', // Nombre del archivo de salida generado
  },
  module: {
    rules: [
      // Reglas para el manejo de archivos JavaScript/TypeScript con Babel
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'], // Extensiones de archivos que se pueden importar sin especificar la extensión completa
  },
};
