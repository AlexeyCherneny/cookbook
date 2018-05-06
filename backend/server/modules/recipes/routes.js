import { Router } from 'express';
import * as RecipesController from './controller';

const routes = new Router();

routes.post('/recipes', RecipesController.createRecipe);
routes.get('/recipes', RecipesController.getRecipes);

export default routes;
