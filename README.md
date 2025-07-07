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
<pre>
git clone https://github.com/JemanusAlan/codealpha_tasks.git 
cd codealpha_tasks/CodeAlpha_Language\ Translation\ Tool
</pre>

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

# Task 2: Chatbot for FAQs

### Global Warming FAQ Chatbot

This project is a web-based FAQ Chatbot built with Python (Flask), HTML, CSS, and basic Natural Language Processing (NLP). It answers user questions about global warming by matching input against a set of predefined FAQs using TF-IDF and cosine similarity.

### Features

-> Built with Flask and pure frontend (HTML, CSS, JS) <br>
-> NLP preprocessing using NLTK <br>
-> Similarity-based matching using TF-IDF + cosine similarity <br>
-> Responsive chat UI with avatars for user and bot <br>
-> Real-time communication without page reloads 

### Installation & Setup

##### Prerequisites

Python 3.7 or above

Pip installed

1. Clone the repository

  git clone https://github.com/JemanusAlan/codealpha_tasks.git
  cd codealpha_tasks/CodeAlpha_Chatbot\ for\ FAQs

2. Create a virtual environment (optional but recommended)

  <pre>
  python -m venv venv
  source venv/bin/activate  # On Windows: venv\Scripts\activate
  </pre>

3. Install dependencies

  <pre>pip install flask nltk scikit-learn</pre>

4. Run the application

python app.py
Visit http://127.0.0.1:5000 in your browser.

### Project Structure

CodeAlpha_Chatbot for FAQs/<br>
│ <br>
├── app.py               # Flask app (backend) <br>
├── chatbot.py           # Chatbot logic (NLP + matching) <br>
├── templates/ <br>
│   └── index.html       # Frontend UI <br>
├── static/ <br>
│   └── style.css        # Styling for the chatbot 

### How It Works

##### Backend (chatbot.py)

Preprocesses both the questions and user input (lowercasing, punctuation removal, tokenizing, stopword removal)

Converts questions into TF-IDF vectors

Uses cosine similarity to find the most relevant question

Returns the corresponding answer or a fallback message

###### Frontend (index.html + script)

Chat interface using a form and JavaScript

Sends user input to /ask endpoint via fetch()

Displays response from the bot with styling and avatars
