setTimeout(function () {
  try {
    window.location.href = "./home/index.html";
  } catch (error) {
    console.error("Navigation failed:", error.message);
    document.querySelector("h2").textContent =
      "Sahifaga o'tishda xatolik yuz berdi.";
  }
}, 3000);
