const express = require('express');
const db =require('./config/database')
const app = express();
require('dotenv').config();


db();
app.use(express.json());

console.log("hindustan sportd");

const port = process.env.PORT || 8080;

app.get("/", (req,res) => {
  res.send("Server is running on port 8080")
})


app.listen(port, () => {
  console.log('Server is running on port number ' + port);
});
