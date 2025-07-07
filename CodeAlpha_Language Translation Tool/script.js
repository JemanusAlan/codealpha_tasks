async function translateText() {
  const inputText = document.getElementById("inputText").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;

  const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "google-translate113.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_RAPIDAPI_KEY"
    },
    body: JSON.stringify({
      from: sourceLang,
      to: targetLang,
      text: inputText
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    document.getElementById("translatedText").innerText = result.trans;
  } catch (error) {
    console.error("Translation failed:", error);
    document.getElementById("translatedText").innerText = "Translation failed!";
  }
}
