// Updating the home view to include featured recipes
import { createElement } from "./utils";
import { getFeaturedReceipts } from "./APIHandler";

function homeView() {
  /* const hero = createElement("img", {
    src: "./src/images/marierestaurant.jpeg",
    alt: "Marie Restaurante Hero Image"
  }); */
  const title = createElement("h2", {
    textContent: "Get to Know Us!",
    className: "title-heading"
  });
  const intro = createElement("p", {
    textContent:
      "Welcome to Marie Restaurant, where seafood lovers find their paradise! Our establishment boasts an impressive variety of fresh seafood, expertly prepared to highlight the natural flavors of the ocean. From succulent shrimp and tender scallops to perfectly grilled fish, each dish is crafted with passion and creativity. Nestled in a charming location, Marie Restaurant offers a cozy ambiance perfect for any occasion, whether it's a family dinner, a romantic night out, or a celebration with friends. Join us for an unforgettable dining experience, where the finest seafood and exceptional service come together to create lasting memories. Savor the ocean’s best with us!",
    className: "intro-paragraph"
  });
  const invite = createElement("p", {
    textContent:
      "Thank you for choosing Marie Restaurant! We invite you to explore our diverse seafood menu and indulge in a culinary journey that celebrates the ocean's finest offerings. Join us for an unforgettable dining experience - where flavor and passion come together on every plate!",
    className: "intro-paragraph"
  });

  const featuredSection = createElement("div", {
    className: "featured-section"
  });

  getFeaturedReceipts().then((recipes) => {
    // Randomly select up to 6 recipes
    const selectedReceipts = recipes.sort(() => 0.8 - Math.random()).slice(0,6);
    const recipeList = selectedReceipts.map((recipe) =>
      createElement("div", { className: "recipe-card" }, [
        createElement("h4", { textContent: recipe.strMeal }),
        createElement("img", { src: recipe.strMealThumb, alt: recipe.strMeal })
      ])
    );
    featuredSection.append(...recipeList);
  });


  return createElement("div", {}, [
   // hero,
    title,
    intro,
    invite,
    featuredSection
  ]);
}

export default homeView;
