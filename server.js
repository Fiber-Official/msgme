const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/ngl_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const MessageSchema = new mongoose.Schema({
    username: String,
    message: String,
});

const Message = mongoose.model('Message', MessageSchema);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/send-message', async (req, res) => {
    const { username, message } = req.body;

    if (!username || !message) {
        return res.status(400).send('Username and message are required');
    }

    const newMessage = new Message({ username, message });
    await newMessage.save();
    res.status(201).send('Message saved');
});

app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
