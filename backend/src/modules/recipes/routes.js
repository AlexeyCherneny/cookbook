import { Router } from 'express';
import * as RecipesController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/recipes', RecipesController.createRecipe);
routes.get('/recipes', requireJwtAuth, RecipesController.getRecipes);

export default routes;
