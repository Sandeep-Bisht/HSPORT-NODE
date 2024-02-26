const nodemailer = require("nodemailer");
const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = {
    createotp: async (req, res) => {
      const  email  = req.body.email;
      if (!email) {
        return res.json({
          status: 400,
          message: 'Enter a valid email'
        });
      } else {
        const otp = Math.floor(100000 + Math.random() * 900000); 
        try {
             cache.set('forgetPasswordOtp', otp, 120)
            if(await cache.get("forgetPasswordOtp"))
            {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    port: 587,
                    auth: {
                      user: "negidpk866@gmail.com",
                      pass: "wxeuyhcuovmrkluz",
                    },
                  });
        
                  const mailOptions = {
                    from: "negidpk866@gmail.com",
                    to: email,
                    subject: "OTP for Login",
                    html: `<p>Your OTP is ${otp}. It is valid for 5 minutes.</p>`,
                  };
        
                   transporter.sendMail(mailOptions);
                  console.log("Email sent");
        
                  res.json({
                    status: 200,
                    message: "We have sent an OTP to your email.",
                  });
            }
            else {
                res.json({
                  status: 400,
                  message: "Something went wrong while generating OTP.",
                });
              }


        } catch (error) {
          console.error(error);
          res.json({
            status: 400,
            message: "Something went wrong",
          });
        }
      }
},
    verifyotp: async (req, res) =>{
       const otp=req.body.otp;
       if(!otp)
       {
         return res.json({
                status:400,
                message:"your otp is expired"
         })
       }
       else if(cache.get("forgetPasswordOtp")){
          let forgetPasswordOtp = cache.get("forgetPasswordOtp");
          if(otp==forgetPasswordOtp)
          {
            res.json({
                status:200,
                message:"verified otp"
            })
          }
          else{
            res.json({
                status:400,
                message:"wrong otp"
            })
          }
       }
    }
  };