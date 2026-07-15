/**
 * Main application script for the Uzum home page.
 * Uses shared utilities from ../shared/utils.js
 */

const BANNER_IMAGES = [
  "../assents/bannner1.png",
  "../assents/banner2.png",
  "../assents/banner3.png",
  "../assents/banner3.png",
];

// Section-to-product mapping: defines which product slice renders into which sections
const SECTION_CONFIG = [
  { slice: null, sections: ["main_section1", "main_section10", "main_section24"] },
  { slice: [11, 16], sections: ["main_section8", "main_section11", "main_section14", "main_section18", "main_section22"] },
  { slice: [14, 19], sections: ["main_section3", "main_section7", "main_section13", "main_section17", "main_section20"] },
  { slice: [3, 8], sections: ["main_section4", "main_section6", "main_section9", "main_section15", "main_section19", "main_section23"] },
  { filter: "electronics", slice: [0, 5], sections: ["main_section2", "main_section5", "main_section12", "main_section16", "main_section21"] },
];

// Insert Swiper carousels into designated placeholder elements
document.querySelectorAll(".swiper-placeholder").forEach((placeholder) => {
  placeholder.innerHTML = createSwiperHTML(BANNER_IMAGES);
});

// Fetch products and render into sections using the config
const products = fetch("https://fakestoreapi.com/products").then((res) =>
  res.json(),
);

products.then((fetchedProducts) => {
  const electronicsFilter = fetchedProducts.filter(
    (item) => item.category === "electronics",
  );

  SECTION_CONFIG.forEach((config) => {
    let productList = config.filter === "electronics"
      ? electronicsFilter
      : fetchedProducts;

    if (config.slice) {
      productList = productList.slice(config.slice[0], config.slice[1]);
    }

    renderProductsToSections(productList, config.sections);
  });
});

// Initialize Swiper after DOM content is ready
initSwipers();
