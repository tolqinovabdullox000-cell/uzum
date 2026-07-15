/**
 * Shared utility functions for the Uzum storefront.
 */

const CURRENCY_RATE = 12400;
const TITLE_MAX_LENGTH = 25;

/**
 * Truncate text to a maximum length, appending "..." if truncated.
 */
function truncateText(text, maxLength = TITLE_MAX_LENGTH) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

/**
 * Format a USD price to UZS string.
 */
function formatPrice(priceUSD) {
  return `${priceUSD * CURRENCY_RATE} so'm`;
}

/**
 * Render a single product card into a given section element.
 */
function renderCard(section, product) {
  const { title, image, rating, price } = product;
  section.innerHTML += `
  <div class="main__item">
    <img src="${image}" class="item__image" />
    <p class="item__title">${truncateText(title)}</p>
    <p class="item__rating">
      <img src="assets/rating_icon.png" alt="">
      ${rating.rate} (${rating.count} sharsh)
    </p>
    <p class="item__price">${formatPrice(price)}</p>
  </div>
  `;
}

/**
 * Render a list of products into multiple sections at once.
 */
function renderProductsToSections(products, sectionIds) {
  const sections = sectionIds.map((id) => document.querySelector(`#${id}`));
  products.forEach((product) => {
    sections.forEach((section) => {
      if (section) renderCard(section, product);
    });
  });
}

/**
 * Query multiple section elements by numeric range.
 * Returns a Map of sectionId -> element.
 */
function getSections(start, end) {
  const sections = {};
  for (let i = start; i <= end; i++) {
    const id = `main_section${i}`;
    sections[id] = document.querySelector(`#${id}`);
  }
  return sections;
}

/**
 * Create a Swiper carousel HTML block.
 */
function createSwiperHTML(bannerImages) {
  const slides = bannerImages
    .map((src) => `<div class="swiper-slide"><img src="${src}" alt=""></div>`)
    .join("\n        ");

  return `
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        ${slides}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  `;
}

/**
 * Initialize all Swiper instances on the page.
 */
function initSwipers() {
  return new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
