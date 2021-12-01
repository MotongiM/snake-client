const { movement,message} = require("./constants")
let connection;
const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data',handUserInput)
    return stdin;
};
const handUserInput = function(data) {
    if (data === '\u0003') {
        process.exit();
    } if (data === movement.right){
        connection.write('Move: right')
    } if (data === movement.down){
        connection.write('Move: down')
    } if (data === movement.up){
        connection.write('Move: up')
    } if (data === movement.left){
        connection.write('Move: left')
    } if (data === 'r') {
        connection.write(`Say: ${message}`)
    }
}

module.exports = { setupInput };