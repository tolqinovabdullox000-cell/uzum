const EXCHANGE_RATE = 12400;

function shortenTitle(title, maxLength) {
  if (typeof title !== "string") return "";
  if (typeof maxLength !== "number" || maxLength < 0) maxLength = 25;
  return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
}

function formatPrice(price) {
  if (typeof price !== "number" || isNaN(price)) return "0 so'm";
  return (price * EXCHANGE_RATE) + " so'm";
}

function filterByCategory(products, category) {
  if (!Array.isArray(products)) return [];
  return products.filter(function (item) {
    return item.category === category;
  });
}

function buildCardHTML(title, image, rate, count, price) {
  var shortenedTitle = shortenTitle(title, 25);
  return (
    '<div class="main__item">' +
    '<img src="' + image + '" class="item__image" />' +
    '<p class="item__title">' + shortenedTitle + "</p>" +
    '<p class="item__rating">' +
    '<img src="assets/rating_icon.png" alt=""> ' +
    rate + " (" + count + " sharsh)" +
    "</p>" +
    '<p class="item__price">' + formatPrice(price) + "</p>" +
    "</div>"
  );
}

function renderCard(givedSection, title, image, rate, count, price) {
  if (!givedSection) return;
  givedSection.innerHTML += buildCardHTML(title, image, rate, count, price);
}

function groupByCategory(products) {
  if (!Array.isArray(products)) return {};
  var groups = {};
  products.forEach(function (item) {
    var cat = item.category || "unknown";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });
  return groups;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    EXCHANGE_RATE: EXCHANGE_RATE,
    shortenTitle: shortenTitle,
    formatPrice: formatPrice,
    filterByCategory: filterByCategory,
    buildCardHTML: buildCardHTML,
    renderCard: renderCard,
    groupByCategory: groupByCategory,
  };
}
