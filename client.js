const net = require('net');
const { IP, PORT, playerName, message} = require("./constants");

const connect = function () {
    const conn = net.createConnection({
      host: IP, // IP address here,
      port: PORT // PORT number here,
    });
    conn.on('connect', (connect) => {
        console.log('Sucessfully connected to the game');
    });
    conn.on('data', (data) =>{
        console.log('you ded cuz you idled')
    });
    // interpret incoming data as text
    conn.on('connect', (connect) => {
        conn.write(`Name: ${playerName}`);
    });
    /*
    conn.on('connect', () => {
        setTimeout(()=>{
            conn.write('Move: up')
        }, 50)
    }) */
    conn.setEncoding('utf8');
    return conn;
};
module.exports = { connect };
