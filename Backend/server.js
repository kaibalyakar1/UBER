const http = require("http");

const app = require("./app");

const server = http.createServer(app);
const connectDB = require("./db/db");
server.listen(3000, () => {
  connectDB();
  console.log("Server running on port 3000");
});
