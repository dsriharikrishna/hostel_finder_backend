import express, { Express } from 'express';
import { json } from 'body-parser';
import allRoutes from './routes/allRoutes';
import errorHandler from './middlewares/errorHandler';
import rateLimiter from './middlewares/rateLimiter';
import requestSanitizer from './middlewares/requestSanitizer';
import { config } from './config/index';
import { AppDataSource } from './config/db';

const app: Express = express();

app.use(json());
app.use(rateLimiter);
app.use(requestSanitizer);

// Routes
app.use(allRoutes);

// Error handling middleware
app.use(errorHandler)


AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });


export default app;