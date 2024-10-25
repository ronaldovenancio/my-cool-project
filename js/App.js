import { createElement } from "./utils";
import { initRouter } from "./router";

function Header() {
  const appTitle = createElement("h1", {
    textContent: "Marie Restaurant",
    className: "heading",
  });

  // Here the nav items are created
  const mainLink = createElement("a", {
    href: "#/main",
    textContent: "Main Page",
  });
  const categoryLink = createElement("a", {
    href: "#/categories",
    textContent: "Categories",
  });
  const receiptLink = createElement("a", {
    href: "#/receipts",
    textContent: "Receipts",
  });

  const nav = createElement("nav", {}, [mainLink, categoryLink, receiptLink]);

  return createElement("header", {}, [appTitle, nav]);
}

function Footer() {
  const copyright = createElement("span", {
    textContent: `© ${new Date().getFullYear()} Marie Restaurant`,
  });

  const footerP = createElement("p", {
    textContent: "All rights reserved",
  });
  const lastModification = createElement("p", {
    textContent: `Last Modification: ${new Date().toLocaleString()}`,
  });

  const contactInfo = createElement("div", {}, [
    createElement("p", { textContent: "Contact Us" }),
    createElement("p", { textContent: "Phone: +55 81 98762 1675" }),
    createElement("p", { textContent: "Email: marierestaurant@gmail.com" }),
    createElement("p", {
      textContent: "Address: 173 Matriz St, Escada, PE 55500-000",
    }),
  ]);

  const creditInfo = createElement("p", {}, [
    createElement("a", {
      href: "https://www.themealdb.com/",
      textContent: "Themealdb",
      target: "_blank",
    }),
  ]);

  return createElement("footer", {}, [
    contactInfo,
   // creditInfo,
    copyright,
   // footerP,
    lastModification,
  ]);
}

function App() {
  const main = createElement("main", {}, []);

  initRouter(main);

  return createElement("div", {}, [Header(main), main, Footer()]);
}

document.getElementById("root").appendChild(App());

export default App;