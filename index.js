import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:5173',
  },
});

let list = [
  {
    id: 1,
    phone: 'Nguyen',
    name: 'Wright',
    company: 'Buchanan',
    agent: 'Goodwin',
    lastOrderDate: 'Horton',
    datePL: 'Abbott',
    isCalling: false,
  },
  {
    id: 2,
    phone: 'Quinn',
    name: 'Dennis',
    company: 'Andrews',
    agent: 'Schmidt',
    lastOrderDate: 'Alexander',
    datePL: 'Hardy',
    isCalling: false,
  },
  {
    id: 3,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 4,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 5,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 6,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 7,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 8,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 9,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 10,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 11,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 12,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
  {
    id: 13,
    phone: 'Carpenter',
    name: 'Kelley',
    company: 'Griffith',
    agent: 'Daniels',
    lastOrderDate: 'Barnett',
    datePL: 'Lindsey',
    isCalling: false,
  },
];

io.on('connection', (socket) => {
  socket.on('filterContactList', (data) => {
    io.emit('filteredContactList', list);
  });
});

io.listen(5174);
