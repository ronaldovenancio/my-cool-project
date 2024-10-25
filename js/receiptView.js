// receiptView to list available receipt categories
import { createElement } from "./utils";
import { getFeaturedReceipts, getRecipeDetails } from "./APIHandler";

function receiptView() {
  const title = createElement("h2", { textContent: "Special Receipt" });
  const receiptSection = createElement("div", {
    className: "receipt-section"
  });

  getFeaturedReceipts().then((recipes) => {
    const groupedCategories = {
      withSpyce: [],
      withoutSpyce: []
    };

    const recipeDetailsPromises = recipes.map((recipe) =>
      getRecipeDetails(recipe.idMeal)
    );

    Promise.all(recipeDetailsPromises).then((detailedReceipts) => {
      detailedReceipts.forEach((recipe) => {
        const ingredients = Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient"))
          .map((key) => recipe[key]?.toLowerCase());

        if (ingredients.some((ingredient) => ingredient?.includes("spyce"))) {
          groupedCategories.withSpyce.push(recipe);
        } else {
          groupedCategories.withoutSpyce.push(recipe);
        }
      });

      const receiptGroups = [
        { name: "Spyce Treats", categories: groupedCategories.withSpyce },
        { name: "Free Spyce", categories: groupedCategories.withoutSpyce },
      ];

      receiptGroups.forEach((group) => {
        if (group.categories.length > 0) {
          const groupTitle = createElement("h3", { textContent: group.name });
         const groupDescription = createElement("p", { textContent: group.categories[0].strCategoryDescription });
          const groupImage = createElement("img", {
            src: group.categories[0].strMealThumb,
            alt: group.name,
          });

          const groupContainer = createElement(
            "div",
            { className: "receipt-group" },
            [groupTitle, groupImage, groupDescription]
          );
          receiptSection.appendChild(groupContainer);
        }
      });
    });
  });

  return createElement("div", {}, [title, receiptSection]);
}

export default receiptView;