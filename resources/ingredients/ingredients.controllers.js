import { getRecipesWithIngredient } from './ingredients.model';

export const returnRecipeWithIngredients = async (req, res) => {
  const { id } = req.params;
  try {
    let recipes = await getRecipesWithIngredient(id);
    return res.status(200).json(recipes);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
