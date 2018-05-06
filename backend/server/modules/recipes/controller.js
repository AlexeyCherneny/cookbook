import Recipe from './model';

export const createRecipe = async (req, res) => {
  const { title, description } = req.body;
  const newRecipe = new Recipe({ title, description });

  try {
    return res.status(201).json({ recipe: await newRecipe.save() });
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'Error with recipe' });
  }
};

export const getRecipes = async (req, res) => {
  try {
    return res.status(200).json({ recipes: await Recipe.find({}) });
  } catch (e) {
    return res
      .status(e.status)
      .json({ error: true, message: 'Error with Recipes' });
  }
};
