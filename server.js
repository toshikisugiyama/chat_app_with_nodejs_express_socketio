const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server)

app.use('/', express.static(__dirname + '/public'))

server.listen(80)

//socket.ioの設定
io.sockets.on('connection', socket => {
    socket.on('login', name => {
        //接続しているユーザー全員にloginを送信
        const time = new Date().toJSON()
        io.sockets.emit('login', time, name)
        //nameを記憶
        socket.client_name = name
    })
    socket.on('post', (name, text) => {
        // 接続しているユーザー全員にpostを送信
        const time = new Date().toJSON()
        socket.emit('self-post', time, name, text)
        socket.broadcast.emit('others-post', time, name, text)
    })
    socket.on('disconnect', () => {
        // 接続しているユーザー全員にlogoutを送信
        const time = new Date().toJSON()
        io.sockets.emit('logout', time, socket.client_name)
    })
})