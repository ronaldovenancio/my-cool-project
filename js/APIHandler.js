// API Handler updates to get featured and category recipes

export async function getFeaturedReceipts() {
    const response = await fetch(
     `https://www.themealdb.com/api/json/v1/1/filter.php?c=SeaFood`
     // `https://dummyjson.com/products`
    );
    const data = await response.json();
    return data.meals;
   // return data.products;
  }
  
  export async function getRecipeDetails(id) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
     // `https://dummyjson.com/products/id=${id}`
    );
    const data = await response.json();
    return data.meals[0];
   //return data.products[0];
  }
  
  export async function getCategoryReceipts() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await response.json();
    return data.categories;
  }