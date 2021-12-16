const express = require("express");
const cors = require('cors');
require("dotenv").config();
const connectDB = require("./config/mongodb");
const app = express();
const http = require('http');
const server = http.createServer(app)

// connect to database with mongodb:
connectDB()

app.use(express.json())
app.use(cors())

// declaring url endpoints :
app.use("/api/users", require("./routes/users"))
app.use("/api/transactions", require("./routes/transactions"))
// app.use("/api/wallets", require("./routes/wallet"))


// start the server
server.listen(3001, () => {console.log("the server is started")});