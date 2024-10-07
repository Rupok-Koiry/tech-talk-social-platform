import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import errorHandler from './app/middlewares/errorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import path from 'path';

const app: Application = express();
// Middleware for parsing JSON bodies
app.use(express.json());
// Middleware for parsing cookies
app.use(cookieParser());
// Set the template engine to EJS
app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'));
// Middleware for enabling Cross-Origin Resource Sharing (CORS) for specified origins
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://ph-assignment-06-client.vercel.app',
    ],
  }),
);

// Route handlers for API endpoints prefixed with /api/v1
app.use('/api', router);

// Middleware for handling global errors
app.use(errorHandler);

// Middleware for handling 404 - Not Found errors
app.use(notFound);

export default app;
