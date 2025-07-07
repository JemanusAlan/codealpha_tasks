# Task 1: Language Translation Tool

This is a simple web-based Language Translation Tool built using HTML, CSS, and JavaScript. It allows users to translate text between multiple languages in real time using the Google Translate API via RapidAPI.

### Features

-> Translate text between languages <br>
-> Auto-detect source language option <br>
-> Simple, clean, and responsive user interface <br>
-> Input box and result display <br>
-> Drop-downs for language selection

### Live Demo

You can view and test the application by cloning the repo and running index.html locally or with Live Server.

### Project Structure

CodeAlpha_Language Translation Tool

=> index.html       # Main HTML page <br>
=> style.css        # UI styling <br>
=> script.js        # JavaScript logic for translation

### Installation

Clone the repository:

git clone https://github.com/JemanusAlan/codealpha_tasks.git
cd codealpha_tasks/CodeAlpha_Language\ Translation\ Tool

Open index.html in your browser

OR

Use Live Server in VS Code for best experience

### API Integration

The app uses Google Translate API via RapidAPI:

<pre>const options = {
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
};</pre>

Replace "YOUR_RAPIDAPI_KEY" with your actual API key.
Do not expose your key publicly in production apps.
