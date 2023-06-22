import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:5173',
  },
});

io.on('connection', (socket) => {
  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('toggle_calling', (data) => {
    io.emit('list_calling', data);
  });
});

io.listen(5174);
