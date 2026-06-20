const section1 = document.querySelector("#main_section1");
const section2 = document.querySelector("#main_section2");
const section3 = document.querySelector("#main_section3");
const section4 = document.querySelector("#main_section4");
const section5 = document.querySelector("#main_section5");
const section6 = document.querySelector("#main_section6");
const section7 = document.querySelector("#main_section7");
const section8 = document.querySelector("#main_section8");
const section9 = document.querySelector("#main_section9");
const section10 = document.querySelector("#main_section10");
const section11 = document.querySelector("#main_section11");
const section12 = document.querySelector("#main_section12");
const section13 = document.querySelector("#main_section13");
const section14 = document.querySelector("#main_section14");
const section15 = document.querySelector("#main_section15");
const section16 = document.querySelector("#main_section16");
const section17 = document.querySelector("#main_section17");
const section18 = document.querySelector("#main_section18");
const section19 = document.querySelector("#main_section19");
const section20 = document.querySelector("#main_section20");
const section21 = document.querySelector("#main_section21");
const section22 = document.querySelector("#main_section22");
const section23 = document.querySelector("#main_section23");
const section24 = document.querySelector("#main_section24");

const products = fetch("https://fakestoreapi.com/products").then((res) =>
  res.json(),
);

const renderCard = (givedSection, title, image, rate, count, price) => {
  const shortenedTitle = title.length > 25 ? title.slice(0, 25) + "..." : title;

  const card = document.createElement("div");
  card.className = "main__item";

  const img = document.createElement("img");
  img.className = "item__image";
  img.src = image;
  img.alt = shortenedTitle;

  const titleEl = document.createElement("p");
  titleEl.className = "item__title";
  titleEl.textContent = shortenedTitle;

  const ratingEl = document.createElement("p");
  ratingEl.className = "item__rating";
  const ratingIcon = document.createElement("img");
  ratingIcon.src = "assets/rating_icon.png";
  ratingIcon.alt = "rating";
  ratingEl.appendChild(ratingIcon);
  ratingEl.appendChild(
    document.createTextNode(" " + rate + " (" + count + " sharsh)")
  );

  const priceEl = document.createElement("p");
  priceEl.className = "item__price";
  priceEl.textContent = price * 12400 + " so'm";

  card.appendChild(img);
  card.appendChild(titleEl);
  card.appendChild(ratingEl);
  card.appendChild(priceEl);
  givedSection.appendChild(card);
};

products.then((fetchedProducts) => {
  const jewelryFilter = fetchedProducts.filter(
    (item) => item.category == "jewelery",
  );
  const electronicsFilter = fetchedProducts.filter(
    (item) => item.category == "electronics",
  );
  const clothingFilter = fetchedProducts.filter(
    (item) => item.category == "men's clothing" || "women's clothing",
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