async function fetchMessages() {
    const response = await fetch('/messages');
    const messages = await response.json();

    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = messages.map(message => `
        <div class="message">
            <strong>${message.username}:</strong>
            <p>${message.message}</p>
        </div>
    `).join('');
}

fetchMessages();
