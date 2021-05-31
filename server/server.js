const PORT = 8888;

const express = require('express');
const app = express(); //создали приложение

const server = require('http').createServer(app); // создали http сервер
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
}); // создали сокеты
//две разные сущности и мы их связываем: создали сервер и сокеты подключаем к нему

app.use(express.json());

const rooms = new Map();

app.get('/room', (req, res) => {
    res.json(rooms);
});

app.post('/room', (req, res) => {
    const {roomId} = req.body;

    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]),
        );
    }

    res.send();
});

io.on("connection", (socket) => {
    socket.on('ROOM:JOIN', ({roomId, name}) => {
        socket.join(roomId);

        rooms.get(roomId).get('users').set(socket.id, name);

        const users = [...rooms.get(roomId).get('users').values()];

        io.in(roomId).emit('ROOM:JOINED', users);
    });

    socket.on('MESSAGES:ADD_MESSAGE', ({roomId, message}) => {
        rooms.get(roomId).get('messages').push(message);

        const messages = rooms.get(roomId).get('messages');

        io.in(roomId).emit('MESSAGES:SET_MESSAGES', messages);
    });

    socket.on('MESSAGES:GET_MESSAGES', ({roomId}) => {
        const messages = rooms.get(roomId).get('messages');

        socket.emit('MESSAGES:SET_MESSAGES', messages);
    });

    socket.on('disconnect', () => {
        rooms.forEach((value, roomId) => {
            if(value.get('users').delete(socket.id)) {
                const users = [...value.get('users').values()];

                socket.to(roomId).emit('ROOM:SET_USERS', users);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server started`);
});
