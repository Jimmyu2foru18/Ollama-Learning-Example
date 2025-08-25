# Ollama Gemma 3 Demo

This project demonstrates a simple web application that interacts with a locally running Ollama instance hosting the Gemma 3:4b model.

## Tech Stack

* **HTML:**  Used for the basic structure of the web page.
* **CSS:**  Provides basic styling for the page.
* **JavaScript:** Handles user input, sends requests to the Ollama API, and displays the response.
* **Ollama:**  The open-source LLM serving platform.  (Download and install from: [https://ollama.com/](https://ollama.com/))  You’ll need to run Gemma 3:4b locally using `ollama run gemma3:4b` *before* running this demo.
* **Fetch API:** Used to make asynchronous HTTP requests to the Ollama API.


## Setup & Running

1. **Install Ollama:** Follow the instructions on the Ollama website ([https://ollama.com/](https://ollama.com/)) to download and install Ollama on your system.

2. **Run Gemma 3:4b ** Serve the HTML: Place index.html, style.css, and script.js in the same directory. 

### You can then:
Use a **simple web server:** This is the easiest method. You can use tools like http-server (Node.js): npm install -g http-server then http-server .
Use a more **advanced server:** You could deploy this to a web hosting platform.
**Open in Browser:** Open your web browser and navigate to the address provided by your web server (usually http://localhost:8080 or similar).

## How it Works
The script.js file does the following:

1. Gets User Input: Retrieves the text entered by the user in the promptInput field.

2. Sends a Request: Uses the fetch API to send a POST request to the Ollama API endpoint (http://localhost:11343/api/generate). The request includes the user's prompt as a JSON payload.

3. Receives the Response: When Ollama generates a response, it sends it back to the web application.

4. Displays the Response: The JavaScript code then takes the response from Ollama and displays it in the responseArea div.
## Notes
**Ollama API URL:** The code assumes the default Ollama API URL (http://localhost:11343/api/generate). If you've configured Ollama to use a different API URL, update the ollamaApiUrl variable in script.js.
**Error Handling:** The example includes basic error handling, but more robust error handling is recommended for a production application.
**Security:** This is a basic demonstration and does not include security measures. In a real-world application, you would need to sanitize user input, handle authentication, and implement other security best practices.

Model Size: The Gemma 3:4b model is a relatively large model. Ensure you have enough RAM on your system to run it.

**To run this:**
```bash
1.  **Save the files:** Save the HTML, CSS, and JavaScript code as `index.html`, `style.css`, and `script.js` respectively.
2.  **Install Ollama:** Follow the instructions at [https://ollama.com/](https://ollama.com/)
3.  **Start Gemma 3:**  Run `ollama run gemma3:4b` in your terminal.
4.  **Open the demo:** Open `index.html` in your web browser.
```
This will display the basic web page, and you can start typing prompts and see Gemma 3:4b's response.  This is a starting point; you can expand on this by adding features like a more sophisticated UI, logging, and more robust error handling.
Downloading model
0 B / 0 B (0%)