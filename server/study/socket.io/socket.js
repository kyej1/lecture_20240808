const SocketIO = require('socket.io')

module.exports = (server) => {
    const io = SocketIO(server, {
        path: "/socket.io"
    })
    io.on('connection', (socket)=>{ //소켓 연결이 되었을때
        socket.on('chat message', (msg)=>{ // 이벤트 이름으로 전달된 메시지 수신
            io.emit('chat message', msg) //들어온 메시지를 송신
        })
    })
}