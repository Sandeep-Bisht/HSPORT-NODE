const subscribedModal=require("./SubscribedModal")
const jwtToken=require("jsonwebtoken")
const nodemailer = require("nodemailer");
const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = {
    create: (req, res) => {
      const { email } = req.body;
  
      subscribedModal.findOne({ email: email }).then((result) => {
        if (result) {
          return res.json({
            status: 400,
            message: "Email is already exist",
          });
        }
  
        const token = jwtToken.sign(
          { email: email },
          "this is my hindustan sport key",
        );
  
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
          subject: "Join our community and subscribe for exclusive updates and offers!",
          html: `<p>Hi </p><p>Great! Just click on the link below to complete your subscription and stay up-to-date with all our latest news, promotions, and exclusive content.</p>
                  <a href="${process.env.CLIENT_URL}/subscribed/${token}" target="_blank">Click here</a>
                  <p>Thank you for your interest in our community!</p><p> Best regards</p>
                 <p>Hindustan Sports</p><p>+91-7500872014</p>`,
        };
        try {
          transporter.sendMail(mailOptions);
          console.log("email send");
          cache.set('userToken', token, 120);
          res.json({
            success: 200,
            message: "Subscription link has been sent to your email.",
            token: token,
          });
        } catch (error) {
          console.error(error);
        }
      }).catch((error) => {
        res.json({
          status: 400,
          message: "Please provide correct information",
        });
      });
    },
  
    verify: (req, res) => {
      const { token } = req.body;
      const userToken = cache.get("userToken");
      if (token.includes(userToken)) 
      {
        const decodedToken = jwtToken.decode(userToken);
        if (decodedToken && decodedToken.email) {
          subscribedModal.create({ email: decodedToken.email }).then((result) => {
            if(result)
            {
              return res.json({
              status: 200,
              message: "Subscription verified and saved.",
            });
        }
          }).catch((error) => {
            if(error.code==1100)
            {
            res.json({
              status: 400,
              message: "Error saving subscription.",
            });
          }
          });
        } else {
          res.json({
            status: 400,
            message: "Invalid token.",
          });
        }
      } else {
        res.json({
          status: 400,
          message: "Token mismatch.",
        });
      }
    },
  };
  