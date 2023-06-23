const express = require('express');
const app = express();
require('dotenv');

app.use(express.json());

console.log("hindustan sportd");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server is running on port number ' + port);
});
