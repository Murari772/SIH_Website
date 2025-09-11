// Detect selected language
const langSelect = document.getElementById("langSelect");

// Function to translate all elements with data-i18n
async function updateTexts(targetLang) {
  const elements = document.querySelectorAll("[data-i18n]");
  
  for (let el of elements) {
    const original = el.getAttribute("data-original") || el.textContent;

    // Save original text if not already stored
    if (!el.getAttribute("data-original")) {
      el.setAttribute("data-original", original);
    }

    // Call backend proxy (which calls LibreTranslate)
    const res = await fetch("http://localhost:5000/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: original, source: "en", target: targetLang })
    });

    const data = await res.json();
    el.textContent = data.translatedText;
  }
}

// On page load, use saved language or default
const savedLang = localStorage.getItem("language") || "en";
langSelect.value = savedLang;
if (savedLang !== "en") updateTexts(savedLang);

// When user changes language
langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("language", lang);
  if (lang === "en") {
    // Reset to original texts
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = el.getAttribute("data-original");
    });
  } else {
    updateTexts(lang);
  }
});
