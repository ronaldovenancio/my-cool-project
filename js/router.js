// Updating the router to include the new HomeView and categoryView
import { createElement } from "./utils";
import homeView from "./homeView";
import categoryView from "./categoryView";
import receiptView from "./receiptView";

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = "";
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case "#/main":
        updateView(homeView());
        break;
      case "#/categories":
        updateView(categoryView());
        break;
      case "#/receipts":
        updateView(receiptView());
        break;
      default:
        updateView(createElement("h3", { textContent: "404 Page Not Found" }));
        break;
    }
  }

  const defaultHash = window.location.hash || "#/main";
  hashToRoute(defaultHash);

  window.addEventListener("hashchange", (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;
    hashToRoute(hash);
  });
}