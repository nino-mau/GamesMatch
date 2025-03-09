// **** IMPORTS ****
import Express from 'express';

// Import dependencies
import 'dotenv/config';
import cookieParser from 'cookie-parser';

// Import middlewares
import cors from 'cors';

// Import routes
import usersRoutes from './routes/users.route.js';

// **** SETUP ****

// const port = process.env.PORT;
const port = process.env.PORT;

const app = Express();

// Allow fetch requests from frontend local dev environement
app.use(
   cors({
      origin: ['http://localhost:5173', 'https://gameverse.local'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      exposedHeaders: ['set-cookie'],
   }),
);

// Allow express to parse json notably receiving data from post requests
app.use(Express.json());

// Allow to parse and manipulate cookies more easily
app.use(cookieParser());

// *** Routes setup ***

// Use all the users related ressources and endpoints
app.use('/api', usersRoutes);

app.get('/', (req, res) => {
   res.send('Hello World!');
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});

// **** LOGIC ****
