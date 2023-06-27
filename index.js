const express = require('express');
const db =require('./config/database')
const app = express();
const bodyParser=require('body-parser');
require('dotenv').config();

const LoginRouter=require('./Api/Authantication/AuthRouting');
const ProductRouter = require('./Api/Product/ProductRouting');


db();
app.use(express.json());

const cors = require('cors');
require('dotenv').config()
app.use(bodyParser.json({ limit: "100mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }))
app.use(cors({ origin: true }));
app.use('/public', express.static('public'));
app.use('/api/auth',LoginRouter);
app.use('/api/product',ProductRouter);

const port = process.env.PORT || 8080;

app.get("/", (req,res) => {
  res.send("Server is running on port 8080")
})


app.listen(port, () => {
  console.log('Server is running on port number ' + port);
});
