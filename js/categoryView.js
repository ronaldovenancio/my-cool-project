// categoryView to list available recipe categories
import { createElement } from "./utils";
import { getFeaturedReceipts, getRecipeDetails } from "./APIHandler";

function categoryView() {
  const title = createElement("h2", { textContent: "Receipt Categories" });
  const categorySection = createElement("div", {
    className: "category-section"
  });

  getFeaturedReceipts().then((recipes) => {
    const groupedCategories = {
      withSalmon: [],
      withoutSalmon: []
    };

    const recipeDetailsPromises = recipes.map((recipe) =>
      getRecipeDetails(recipe.idMeal)
    );

    Promise.all(recipeDetailsPromises).then((detailedReceipts) => {
      detailedReceipts.forEach((recipe) => {
        const ingredients = Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient"))
          .map((key) => recipe[key]?.toLowerCase());

        if (ingredients.some((ingredient) => ingredient?.includes("salmon"))) {
          groupedCategories.withSalmon.push(recipe);
        } else {
          groupedCategories.withoutSalmon.push(recipe);
        }
      });

      const categoryGroups = [
        { name: "Fish Treats", categories: groupedCategories.withSalmon },
        { name: "Free Salmon", categories: groupedCategories.withoutSalmon },
      ];

      categoryGroups.forEach((group) => {
        if (group.categories.length > 0) {
          const groupTitle = createElement("h3", { textContent: group.name });
          const groupImage = createElement("img", {
            src: group.categories[0].strMealThumb,
            alt: group.name,
          });

          const groupContainer = createElement(
            "div",
            { className: "category-group" },
            [groupTitle, groupImage]
          );
          categorySection.appendChild(groupContainer);
        }
      });
    });
  });

  return createElement("div", {}, [title, categorySection]);
}

export default categoryView;