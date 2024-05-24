document.getElementById('messageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    
    const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, message }),
    });
    
    if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('messageForm').reset();
    } else {
        alert('Failed to send message.');
    }
});
