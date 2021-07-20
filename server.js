const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const server = app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = require('socket.io')(server, { cors: true });

io.on('connection', socket => {
    console.log('Nice to meet you. (shake hand)');
    socket.emit('welcome','welcome to our chat app');
});