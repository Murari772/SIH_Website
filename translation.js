document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) {
    console.error("Language selector with ID 'langSelect' not found.");
    return;
  }

  // This async function encapsulates all the translation logic
  const translatePage = async () => {
    const targetLang = langSelect.value;
    const elements = document.querySelectorAll("[data-i18n]");

    // Use Promise.all to translate all elements in parallel for better performance
    const translationPromises = Array.from(elements).map(async (el) => {
      // Save original text to a data attribute if it doesn't exist
      if (!el.dataset.original) {
        el.dataset.original = el.textContent.trim();
      }

      // If the target language is English, just reset to the original text and skip the API call
      if (targetLang === "en") {
        el.textContent = el.dataset.original;
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: el.dataset.original,
            source: "en",
            target: targetLang,
          }),
        });

        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.translatedText) {
          el.textContent = data.translatedText;
        } else {
          console.error("Translation response was invalid:", data);
          // Revert to original text if the translation fails
          el.textContent = el.dataset.original;
        }
      } catch (err) {
        console.error("Error fetching translation:", err);
        // Revert to original text if there's a network error
        el.textContent = el.dataset.original;
      }
    });

    // Wait for all translation promises to resolve
    await Promise.all(translationPromises);
  };

  // Attach the event listener to the 'change' event
  langSelect.addEventListener("change", translatePage);

  // Trigger the translation function once the page is fully loaded
  // This ensures the page is translated to the default language (English)
  // even on the initial load.
  translatePage();
});