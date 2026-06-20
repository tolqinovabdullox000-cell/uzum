/**
 * @jest-environment jsdom
 */
const {
  DEFAULT_REDIRECT_DELAY,
  DEFAULT_REDIRECT_URL,
  scheduleRedirect,
  getRedirectConfig,
} = require("../loading/utils");

beforeEach(function () {
  jest.useFakeTimers();
});

afterEach(function () {
  jest.useRealTimers();
});

// --- konstantalar ---
describe("konstantalar", function () {
  test("DEFAULT_REDIRECT_DELAY 3000 ga teng", function () {
    expect(DEFAULT_REDIRECT_DELAY).toBe(3000);
  });

  test("DEFAULT_REDIRECT_URL to'g'ri yo'lga ega", function () {
    expect(DEFAULT_REDIRECT_URL).toBe("./home/index.html");
  });
});

// --- getRedirectConfig ---
describe("getRedirectConfig", function () {
  test("standart konfiguratsiya qaytaradi (parametrsiz)", function () {
    var config = getRedirectConfig();
    expect(config.delay).toBe(3000);
    expect(config.url).toBe("./home/index.html");
  });

  test("maxsus delay bilan ishlaydi", function () {
    var config = getRedirectConfig(5000);
    expect(config.delay).toBe(5000);
    expect(config.url).toBe("./home/index.html");
  });

  test("maxsus url bilan ishlaydi", function () {
    var config = getRedirectConfig(undefined, "/boshqa-sahifa.html");
    expect(config.delay).toBe(3000);
    expect(config.url).toBe("/boshqa-sahifa.html");
  });

  test("ikkala parametr bilan ishlaydi", function () {
    var config = getRedirectConfig(1000, "/test.html");
    expect(config.delay).toBe(1000);
    expect(config.url).toBe("/test.html");
  });

  test("salbiy delay standart qiymatga tushadi", function () {
    var config = getRedirectConfig(-100);
    expect(config.delay).toBe(3000);
  });

  test("0 delay qabul qilinadi", function () {
    var config = getRedirectConfig(0);
    expect(config.delay).toBe(0);
  });

  test("bo'sh string url standart qiymatga tushadi", function () {
    var config = getRedirectConfig(undefined, "");
    expect(config.url).toBe("./home/index.html");
  });

  test("raqam bo'lmagan delay standart qiymatga tushadi", function () {
    var config = getRedirectConfig("abc");
    expect(config.delay).toBe(3000);
  });
});

// --- scheduleRedirect ---
describe("scheduleRedirect", function () {
  test("3 soniyadan keyin yo'naltiradi (standart)", function () {
    var fakeLocation = { href: "" };
    scheduleRedirect(3000, "./home/index.html", fakeLocation);
    expect(fakeLocation.href).toBe("");
    jest.advanceTimersByTime(3000);
    expect(fakeLocation.href).toBe("./home/index.html");
  });

  test("maxsus vaqt va url bilan yo'naltiradi", function () {
    var fakeLocation = { href: "" };
    scheduleRedirect(5000, "/boshqa.html", fakeLocation);
    jest.advanceTimersByTime(4999);
    expect(fakeLocation.href).toBe("");
    jest.advanceTimersByTime(1);
    expect(fakeLocation.href).toBe("/boshqa.html");
  });

  test("vaqt tugamaguncha yo'naltirmaydi", function () {
    var fakeLocation = { href: "" };
    scheduleRedirect(3000, "./home/index.html", fakeLocation);
    jest.advanceTimersByTime(2999);
    expect(fakeLocation.href).toBe("");
  });

  test("salbiy delay standart qiymatga tushadi", function () {
    var fakeLocation = { href: "" };
    scheduleRedirect(-1, "./home/index.html", fakeLocation);
    jest.advanceTimersByTime(3000);
    expect(fakeLocation.href).toBe("./home/index.html");
  });

  test("bo'sh url standart qiymatga tushadi", function () {
    var fakeLocation = { href: "" };
    scheduleRedirect(1000, "", fakeLocation);
    jest.advanceTimersByTime(1000);
    expect(fakeLocation.href).toBe("./home/index.html");
  });

  test("timer ID qaytaradi (tozalash uchun)", function () {
    var fakeLocation = { href: "" };
    var timerId = scheduleRedirect(3000, "./home/index.html", fakeLocation);
    expect(timerId).toBeDefined();
  });

  test("timer bekor qilinsa yo'naltirmaydi", function () {
    var fakeLocation = { href: "" };
    var timerId = scheduleRedirect(3000, "./home/index.html", fakeLocation);
    clearTimeout(timerId);
    jest.advanceTimersByTime(5000);
    expect(fakeLocation.href).toBe("");
  });
});
