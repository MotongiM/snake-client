const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (connect) => {
    console.log("Sucessfully connected to the game");
  });
  conn.on("data", (data)=>{
    console.log("you ded cuz you idled")
  });
  return conn;
};
console.log("Connecting...")
connect();