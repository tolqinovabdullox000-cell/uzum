/**
 * @jest-environment jsdom
 */
const {
  EXCHANGE_RATE,
  shortenTitle,
  formatPrice,
  filterByCategory,
  buildCardHTML,
  renderCard,
  groupByCategory,
} = require("../home/utils");

// --- shortenTitle ---
describe("shortenTitle", function () {
  test("25 belgidan qisqa sarlavha o'zgarishsiz qaytadi", function () {
    expect(shortenTitle("Qisqa nom")).toBe("Qisqa nom");
  });

  test("aynan 25 belgili sarlavha o'zgarishsiz qaytadi", function () {
    var title = "a".repeat(25);
    expect(shortenTitle(title)).toBe(title);
  });

  test("25 belgidan uzun sarlavha qisqartiriladi va '...' qo'shiladi", function () {
    var title = "Bu juda uzun sarlavha 12345678";
    expect(shortenTitle(title)).toBe(title.slice(0, 25) + "...");
  });

  test("maxLength parametri bilan ishlaydi", function () {
    expect(shortenTitle("Salom dunyo", 5)).toBe("Salom...");
  });

  test("bo'sh string bo'sh qaytadi", function () {
    expect(shortenTitle("")).toBe("");
  });

  test("string bo'lmagan qiymat uchun bo'sh string qaytadi", function () {
    expect(shortenTitle(null)).toBe("");
    expect(shortenTitle(undefined)).toBe("");
    expect(shortenTitle(123)).toBe("");
  });

  test("salbiy maxLength 25 ga tushadi", function () {
    var title = "a".repeat(30);
    expect(shortenTitle(title, -1)).toBe("a".repeat(25) + "...");
  });
});

// --- formatPrice ---
describe("formatPrice", function () {
  test("narxni so'mga o'giradi", function () {
    expect(formatPrice(10)).toBe((10 * EXCHANGE_RATE) + " so'm");
  });

  test("0 narx uchun '0 so'm' qaytadi", function () {
    expect(formatPrice(0)).toBe("0 so'm");
  });

  test("kasrli narx to'g'ri hisoblanadi", function () {
    expect(formatPrice(9.99)).toBe((9.99 * EXCHANGE_RATE) + " so'm");
  });

  test("raqam bo'lmagan qiymat uchun '0 so'm' qaytadi", function () {
    expect(formatPrice("abc")).toBe("0 so'm");
    expect(formatPrice(null)).toBe("0 so'm");
    expect(formatPrice(undefined)).toBe("0 so'm");
  });

  test("NaN uchun '0 so'm' qaytadi", function () {
    expect(formatPrice(NaN)).toBe("0 so'm");
  });

  test("katta narx to'g'ri hisoblanadi", function () {
    expect(formatPrice(1000)).toBe((1000 * EXCHANGE_RATE) + " so'm");
  });
});

// --- filterByCategory ---
describe("filterByCategory", function () {
  var products = [
    { title: "Uzuk", category: "jewelery" },
    { title: "Telefon", category: "electronics" },
    { title: "Ko'ylak", category: "men's clothing" },
    { title: "Quloqchin", category: "electronics" },
    { title: "Bilakuzuk", category: "jewelery" },
  ];

  test("'jewelery' kategoriyasini to'g'ri filtrleydi", function () {
    var result = filterByCategory(products, "jewelery");
    expect(result).toHaveLength(2);
    expect(result.every(function (p) { return p.category === "jewelery"; })).toBe(true);
  });

  test("'electronics' kategoriyasini to'g'ri filtrleydi", function () {
    var result = filterByCategory(products, "electronics");
    expect(result).toHaveLength(2);
  });

  test("mavjud bo'lmagan kategoriya bo'sh massiv qaytaradi", function () {
    expect(filterByCategory(products, "food")).toEqual([]);
  });

  test("bo'sh massiv bo'sh massiv qaytaradi", function () {
    expect(filterByCategory([], "jewelery")).toEqual([]);
  });

  test("massiv bo'lmagan qiymat bo'sh massiv qaytaradi", function () {
    expect(filterByCategory(null, "jewelery")).toEqual([]);
    expect(filterByCategory(undefined, "jewelery")).toEqual([]);
    expect(filterByCategory("string", "jewelery")).toEqual([]);
  });
});

// --- buildCardHTML ---
describe("buildCardHTML", function () {
  test("to'g'ri HTML yaratadi", function () {
    var html = buildCardHTML("Test mahsulot", "img.png", 4.5, 100, 10);
    expect(html).toContain('class="main__item"');
    expect(html).toContain('src="img.png"');
    expect(html).toContain("Test mahsulot");
    expect(html).toContain("4.5");
    expect(html).toContain("100 sharsh");
    expect(html).toContain(formatPrice(10));
  });

  test("uzun sarlavha qisqartiriladi", function () {
    var longTitle = "Bu juda uzun sarlavha nomlanishi bor";
    var html = buildCardHTML(longTitle, "img.png", 3, 50, 5);
    expect(html).toContain("...");
    expect(html).not.toContain(longTitle);
  });

  test("qisqa sarlavha to'liq ko'rsatiladi", function () {
    var html = buildCardHTML("Qisqa", "img.png", 5, 200, 20);
    expect(html).toContain("Qisqa");
  });
});

// --- renderCard ---
describe("renderCard", function () {
  test("DOM elementga karta qo'shadi", function () {
    var section = document.createElement("section");
    renderCard(section, "Mahsulot", "img.png", 4, 10, 5);
    expect(section.innerHTML).toContain("Mahsulot");
    expect(section.innerHTML).toContain('class="main__item"');
  });

  test("bir nechta karta qo'shiladi", function () {
    var section = document.createElement("section");
    renderCard(section, "Birinchi", "a.png", 3, 5, 10);
    renderCard(section, "Ikkinchi", "b.png", 4, 8, 20);
    expect(section.querySelectorAll(".main__item")).toHaveLength(2);
  });

  test("null section bilan xato bermaydi", function () {
    expect(function () {
      renderCard(null, "Test", "img.png", 4, 10, 5);
    }).not.toThrow();
  });

  test("undefined section bilan xato bermaydi", function () {
    expect(function () {
      renderCard(undefined, "Test", "img.png", 4, 10, 5);
    }).not.toThrow();
  });
});

// --- groupByCategory ---
describe("groupByCategory", function () {
  var products = [
    { title: "A", category: "electronics" },
    { title: "B", category: "jewelery" },
    { title: "C", category: "electronics" },
    { title: "D", category: "men's clothing" },
  ];

  test("mahsulotlarni kategoriyalar bo'yicha guruhlaydi", function () {
    var groups = groupByCategory(products);
    expect(Object.keys(groups)).toHaveLength(3);
    expect(groups["electronics"]).toHaveLength(2);
    expect(groups["jewelery"]).toHaveLength(1);
    expect(groups["men's clothing"]).toHaveLength(1);
  });

  test("bo'sh massiv bo'sh obyekt qaytaradi", function () {
    expect(groupByCategory([])).toEqual({});
  });

  test("massiv bo'lmagan qiymat bo'sh obyekt qaytaradi", function () {
    expect(groupByCategory(null)).toEqual({});
    expect(groupByCategory("string")).toEqual({});
  });

  test("kategoriyasi bo'lmagan mahsulot 'unknown' ga tushadi", function () {
    var result = groupByCategory([{ title: "X" }]);
    expect(result["unknown"]).toHaveLength(1);
  });
});

// --- EXCHANGE_RATE ---
describe("EXCHANGE_RATE", function () {
  test("12400 ga teng", function () {
    expect(EXCHANGE_RATE).toBe(12400);
  });
});
