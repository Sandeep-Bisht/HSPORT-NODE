const CartService = require("./CartService");
module.exports = {
  create: (req, res) => {
    console.log("inside create cart", req.body);
    try {
      var data = { ...req.body };
      CartService.create(data)
        .then((result) => {
          if (result) {
            res.json({
              success: 200,
              message: "Cart created successfully",
            });
          }
        })
        .catch((error) => {
          if (error.code === 11000) {
            res.status(200).json({
              success: 400,
              message: "Item already exists",
            });
          } else {
            res.status(400).json({
              success: 400,
              message: "Please provide correct information",
            });
          }
        });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        success: 400,
        message: "Please provide correct information",
      });
    }
  },
  
  
  find_by_id:(req,res,next) =>{
    
    const{userid}=req.body
    // console.log("inside get cart by id", userid)
    try {           
       
      CartService.find_by_id(userid).then((result) => {
        if (result.length>=0) {  
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
        sucess: 400,
        message: "Please provide correct information",
      });
    }
  },
  find_and_update:(req,res,next)=>{ 
    // console.log("insdie finde and update")
  const{_id,userid,order}=req.body
  console.log("insdie finde and update", _id,userid,order)
  try{  
  CartService.find_and_update(_id,userid,order).then((result) => { 
    console.log(result, "resulteee ")
      if (result) {
        res.status(200).json({          
          data: result,
          msg:'data found'
        });
             
      } else {
        res.json({
          error: 400,
          data: result,
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
  },
  find_and_delete:(req,res)=>{
    const {_id} = req.body
    try{  
      CartService.find_and_delete(_id).then((result) => {      
          if (result && result.length>0) {  
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
            sucess: 400,
            message: "Please provide correct information",
          });
        }     
  }

};
