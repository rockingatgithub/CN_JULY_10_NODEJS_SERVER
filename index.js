const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const events = require('events')
const http = require('http');
const {Server} = require('socket.io')
const db = require('./config/mongoose')
const Student = require('./model/student')
// const passport = require('./config/passportLocalStrategy')
const passportJWT = require('./config/passportJWT')


const PORT = 8000
const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passportJWT.initialize());
// app.use(passport.session());


// chatsockets setup

io.on('connection', (socket) => {

    console.log("A user connected!")

    socket.on('hello', (data) => {
        console.log(data)
        io.emit('hello-back', data)

    })



})



app.use('/', require('./routes'))
server.listen(PORT, () => {
    console.log("Server successfully started!")
})