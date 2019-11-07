import { getRecipes, getShoppingList, getInstructions } from './recipes.model';

export const getIngredients = async (req, res) => {
  try {
    let recipes = await getRecipes();
    return res.status(200).json(recipes);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const returnShoppingList = async (req, res) => {
  const { id } = req.params;
  try {
    let shoppingList = await getShoppingList(id);
    return res.status(200).json(shoppingList);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const returnInstructions = async (req, res) => {
  const { id } = req.params;
  try {
    let instuctions = await getInstructions(id);
    return res.status(200).json(instuctions);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
