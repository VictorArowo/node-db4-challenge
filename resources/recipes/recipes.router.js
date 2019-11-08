import { Router } from 'express';
import {
  getIngredients,
  returnInstructions,
  returnShoppingList
} from './recipes.controllers';

const router = Router();

router.get('/', getIngredients);
router.get('/:id/shoppingList', returnShoppingList);
router.get('/:id/instructions', returnInstructions);

export default router;
