import io from 'socket.io-client'

// MUST CHANGE localhost to IP ADDRESS
const socket = io.connect('http://10.68.0.120:8000')

export default socket
