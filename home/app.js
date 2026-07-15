function getSection(id) {
  const el = document.querySelector(id);
  if (!el) {
    console.error(`Section not found: ${id}`);
  }
  return el;
}

const section1 = getSection("#main_section1");
const section2 = getSection("#main_section2");
const section3 = getSection("#main_section3");
const section4 = getSection("#main_section4");
const section5 = getSection("#main_section5");
const section6 = getSection("#main_section6");
const section7 = getSection("#main_section7");
const section8 = getSection("#main_section8");
const section9 = getSection("#main_section9");
const section10 = getSection("#main_section10");
const section11 = getSection("#main_section11");
const section12 = getSection("#main_section12");
const section13 = getSection("#main_section13");
const section14 = getSection("#main_section14");
const section15 = getSection("#main_section15");
const section16 = getSection("#main_section16");
const section17 = getSection("#main_section17");
const section18 = getSection("#main_section18");
const section19 = getSection("#main_section19");
const section20 = getSection("#main_section20");
const section21 = getSection("#main_section21");
const section22 = getSection("#main_section22");
const section23 = getSection("#main_section23");
const section24 = getSection("#main_section24");

const products = fetch("https://fakestoreapi.com/products").then((res) => {
  if (!res.ok) {
    throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
  }
  return res.json();
});

const renderCard = (givedSection, title, image, rate, count, price) => {
  if (!givedSection) {
    console.error("renderCard: target section is null, skipping render.");
    return;
  }
  if (!title || !image) {
    console.warn("renderCard: missing title or image, skipping render.");
    return;
  }
  const shortenedTitle = title.length > 25 ? title.slice(0, 25) + "..." : title;
  givedSection.innerHTML += `
  <div class="main__item">
    <img src="${image}" class="item__image" />
      <p class="item__title">${shortenedTitle}</p>
      <p class="item__rating">
        <img src="assets/rating_icon.png" alt=""> 
        ${rate} (${count} sharsh)
      </p>
      <p class="item__price">${price * 12400} so'm</p>
    </div>
  `;
};

products.then((fetchedProducts) => {
  if (!Array.isArray(fetchedProducts)) {
    throw new Error("Invalid API response: expected an array of products.");
  }
  const jewelryFilter = fetchedProducts.filter(
    (item) => item.category == "jewelery",
  );
  const electronicsFilter = fetchedProducts.filter(
    (item) => item.category == "electronics",
  );
  const clothingFilter = fetchedProducts.filter(
    (item) =>
      item.category == "men's clothing" || item.category == "women's clothing",
  );
  fetchedProducts.forEach((card) => {
    renderCard(
      section1,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section10,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section24,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
  });
  fetchedProducts.slice(11, 16).forEach((card) => {
    renderCard(
      section8,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section11,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section14,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section18,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section22,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
  });
  fetchedProducts.slice(14, 19).forEach((card) => {
    renderCard(
      section3,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section7,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section13,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section17,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section20,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
  });
  fetchedProducts.slice(3, 8).forEach((card) => {
    renderCard(
      section4,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section6,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section9,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section15,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section19,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section23,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
  });
  electronicsFilter.slice(0, 5).forEach((card) => {
    renderCard(
      section2,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );

    renderCard(
      section5,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section12,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section16,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
    renderCard(
      section21,
      card.title,
      card.image,
      card.rating.rate,
      card.rating.count,
      card.price,
    );
  });
}).catch((error) => {
  console.error("Failed to load products:", error.message);
  const main = document.querySelector("main");
  if (main) {
    const errorBanner = document.createElement("div");
    errorBanner.className = "error-banner";
    errorBanner.textContent =
      "Mahsulotlarni yuklashda xatolik yuz berdi. Iltimos, sahifani yangilang.";
    main.prepend(errorBanner);
  }
});




const swiper = new Swiper(".mySwiper", {
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