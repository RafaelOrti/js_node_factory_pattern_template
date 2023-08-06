// app.ts
// This file contains the main application logic.

// Import necessary modules
import express, { Request, Response } from 'express';
import { ProductFactory } from '../factories';

// Create an Express app instance
const app = express();

// Create an instance of the ProductFactory
const productFactory = new ProductFactory();

// Define sample product data
const productA = productFactory.createProduct('A', 'Product A', 'This is Product A.');
const productB = productFactory.createProduct('B', 'Product B', 'This is Product B.');

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to ${global.appName}!`);
});

app.get('/products', (req: Request, res: Response) => {
  const products = [productA, productB];
  res.json(products);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
