<<<<<<< HEAD
const promptInput = document.getElementById('promptInput');
const responseArea = document.getElementById('responseArea');

// Use the proxy instead of hitting Ollama directly
const ollamaApiUrl = '/api/generate';

async function sendMessage() {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    responseArea.textContent = '⚠️ Please enter a prompt.';
    return;
  }

  responseArea.textContent = "⏳ Thinking...";

  try {
    const response = await fetch(ollamaApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma",  // ensure you have this: ollama pull gemma
        prompt: prompt,
        stream: false
      })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    responseArea.textContent = data.response || "No response received.";
  } catch (error) {
    console.error("Error:", error);
    responseArea.textContent = "❌ Could not connect to proxy or Ollama.";
  } finally {
    promptInput.value = "";
  }
}
=======
//Example for OLLAMA and Gemma 3:4 B
const promptInput = document.getElementById('promptInput');
const responseArea = document.getElementById('responseArea');

const ollamaApiUrl = 'http://localhost:11343/api/generate'; // Corrected Port

async function sendMessage() {
  const prompt = promptInput.value;

  if (!prompt) {
    responseArea.textContent = 'Please enter a prompt.';
    return;
  }

  try {
    const response = await fetch(ollamaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: prompt })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    responseArea.textContent = data.response;

  } catch (error) {
    console.error('Error:', error);
    responseArea.textContent = `Error: ${error}`;
  } finally {
    promptInput.value = ''; // Clear the input field
  }
}
>>>>>>> 793fe1164009dc72581063c79991e946f7e159b4
