import { Router } from 'express';
import { returnRecipeWithIngredients } from './ingredients.controllers';

const router = Router();

router.get('/:id/recipes', returnRecipeWithIngredients);

export default router;
