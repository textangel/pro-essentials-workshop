
type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  ingredients: Ingredient[];
  instructions: string;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
  console.log(recipe.title);
  console.log(recipe.instructions);
  for (const ingredient of recipe.ingredients) {
    console.log(ingredient.name, ingredient.quantity);
  }
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
