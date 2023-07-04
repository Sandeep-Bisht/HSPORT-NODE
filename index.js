const express = require('express');
const db =require('./config/database')
const app = express();
const bodyParser=require('body-parser');
require('dotenv').config();

const LoginRouter=require('./Api/Authantication/AuthRouting');
const ProductRouter = require('./Api/Product/ProductRouting');
const TopBrandsRouter = require('./Api/TopBrands/TopBrandsRouting');
const CategoryRouter = require('./Api/Category/CategoryRouting');
const SubCategoryRouter = require('./Api/SubCategory/SubCategoryRouting');
const WishlistRouter = require('./Api/Wishlist/WishlistRouting');
const CartRouter = require('./Api/Cart/CartRouting')



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
app.use('/api/brands', TopBrandsRouter);
app.use('/api/category', CategoryRouter);
app.use('/api/subcategory', SubCategoryRouter);
app.use('/api/wishlist', WishlistRouter);
app.use('/api/cart', CartRouter);

const port = process.env.PORT || 8080;

app.get("/", (req,res) => {
  res.send("Server is running on port 8080")
})


app.listen(port, () => {
  console.log('Server is running on port number ' + port);
});
