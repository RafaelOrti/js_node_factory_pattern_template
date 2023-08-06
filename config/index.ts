// index.ts

// Import and re-export the main elements from the other files for easier access
export { default as setup } from './scripts/setup';
export { default as app } from './scripts/app';

// Factories
export { default as productFactory } from './factories/productFactory';
export { default as anotherFactory } from './factories/anotherFactory';

// Models
export { default as Product } from './models/product';
export { default as AnotherModel } from './models/anotherModel';

// Services
export { default as ProductService } from './services/productService';
export { default as AnotherService } from './services/anotherService';

// Routes
export { default as productRoutes } from './routes/productRoutes';
export { default as anotherRoutes } from './routes/anotherRoutes';
