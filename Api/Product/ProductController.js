const ProductService = require("./ProductService");
const slugify = require("slugify");
const mongoose = require('mongoose');

module.exports = {
  create: (req, res) => {
    try {
      const { name, ...otherData } = req.body;
      const slug = slugify(name, { lower: true });
      const data = { ...otherData, name, slug, image: req.files.image, otherImage: req.files.otherImage };

      ProductService.create(data)
        .then((result) => {
          if (result) {
            res.status(200).json({
              success: 200,
              message: "Product Created successfully",
            });
          } else {
            res.json({
              success: 400,
              message: "Please provide correct information",
            });
          }
        })
        .catch((err) => {
          if (err.code === 11000) {
            res.status(400).json({
              success: 400,
              message: "Product already exists",
            });
          } else {
            console.log(err);
            res.json({
              success: 400,
              message: "Please provide correct information",
            });
          }
        });
    } catch (err) {
      console.log(err);
      res.json({
        success: 400,
        message: "Please provide correct information",
      });
    }
  },
  find_all: (req, res, next) => {    
      try {            
        ProductService.find_all().then((result) => {
          if (result) {
            res.status(200).json({
              data: result,
              msg:'data found',
             
            });
                 
          } else {
            res.json({
              success: 400,
              message: "Data Not Found",
            });
          }
        });
      } catch (err) {
        console.log(err);
        res.json({
          success: 400,
          message: "Please provide correct information",
        });
      }  
  },
  find_by_id:(req,res,next) =>{
    
    let _id = { ...req.body }

    //  console.log(_id, "inside find by id")
    try {            
      ProductService.find_by_id(_id).then((result) => {
        if (result) {  
          res.status(200).json({
            data: result,
            msg:'data found'
          });
               
        } else {
          res.json({
            error: 400,
            message: "Data Not Found",
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.json({
        success: 400,
        message: "Please provide correct information",
      });
    }
  },

  find_product_by_category: (req, res, next) => {
    const category = new mongoose.Types.ObjectId(req.body.category);
  
    console.log(category, "inside find by id");
  
    try {
      ProductService.find_product_by_category(category)
        .then((result) => {
          console.log(result, "result"); // Log the resolved data
          if (result) {
            res.status(200).json({
              data: result,
              msg: 'Data found',
            });
          } else {
            res.json({
              error: 400,
              message: "Data not found",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          res.json({
            error: 500,
            message: "Internal server error",
          });
        });
    } catch (err) {
      console.log(err);
      res.json({
        error: 400,
        message: "Please provide correct information",
      });
    }
  },
  




  find_and_update:(req,res,next)=>{
    const { _id, name, description, warehouse, category, subcategory, quantity, reorderQuantity, maximumOrder, inrMrp, dollerMrp, inrDiscount, dollerDiscount, manufacturer, type } = req.body;
    const slug = slugify(name, { lower: true });
    
    const data = {
      _id: _id,
      name: name,
      slug: slug,
      description: description,
      warehouse: warehouse,
      category: category,
      subcategory: subcategory,
      quantity: quantity,
      reorderQuantity: reorderQuantity,
      maximumOrder: maximumOrder,
      inrMrp: inrMrp,
      dollerMrp: dollerMrp,
      inrDiscount: inrDiscount,
      dollerDiscount: dollerDiscount,
      manufacturer: manufacturer,
      type: type,
    };
    
    if (req.files.image) {
      data.image = req.files.image;
    }
    if (req.files.image) {
      data.otherImage = req.files.otherImage;
    }
    
    try {
      ProductService.find_and_update(_id, data).then((result) => {
        if (result) {
          res.status(200).json({
            data: result,
            msg: 'data found'
          });
        } else {
          res.json({
            error: 400,
            message: "Data Not Found",
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.json({
        success: 400,
        message: "Please provide correct information",
      });
    }
    
    },
  find_and_delete:(req,res)=>{
    const {_id} = req.body
    try{  
      ProductService.find_and_delete(_id).then((result) => {      
          if (result.length>0) {  
            res.status(200).json({
              data: result,
              msg:'cart item deleted'
            });
                 
          } else {
            res.json({
              error: 400,
              message: "Data Not Found",
            });
          }
        })
      }
       catch (err) {
          console.log(err);
          res.json({
            success: 400,
            message: "Please provide correct information",
          });
        }     
  }

};
