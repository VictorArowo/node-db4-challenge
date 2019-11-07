import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import recipeRouter from './resources/recipes/recipes.router';
import ingredientsRouter from './resources/ingredients/ingredients.router';

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientsRouter);

export default server;
