const AuthService = require("./AuthService");
// const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { omit } = require("lodash");

module.exports = {
  create: (req, res) => {
    console.log("inside cretae ", req.body);
    const { password } = req.body;
    bcrypt.hash(password, 10, (error, hash) => {
      if (error) {
        res.status(500).json({
          msg: "internal Server Error Create",
        });
      } else {
        try {
          var data = {
            password: hash,
            email: req.body.email,
            role: req.body.role,
            userStatus: "active",
          };
          AuthService.create(data)
            .then((result) => {
              if (result) {
                res.status(200).json({
                  success: 200,
                  data: result,
                  msg: "User created!",
                });
              }
            })
            .catch((err) => {
              console.log(err);
              if (err.code === 11000) {
                res.status(400).json({
                  success: 400,
                  message: "User already exists",
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
            sucess: 400,
            message: "Please provide correct information",
          });
        }
      }
    });
  },
  isuser: async (req, res) => {
    console.log(req.body, "inside is user");
    try {
      const user = await AuthService.findOne({ email: req.body.email });
      if (user?.userStatus === "active") {
        console.log(user, "user");
        bcrypt.compare(req.body.password, user.password, (err, response) => {
          if (response) {
            const userdata = { ...user._doc };
            delete userdata.password;
            delete userdata.createdAt;
            delete userdata.updatedAt;
            delete userdata.__v;
            var token = jwt.sign(
              {
                email: req.body.email,
              },
              "this is my hindustan sport key",
              { expiresIn: "1h" }
            );

            console.log(userdata, "userrrrrrrrr");
            res.status(200).json({
              success: 200,
              token: token,
              user: userdata,
            });
          } else {
            res.json({
              success: 403,
              error: "Username or password is invalid",
            });
          }
        });
      } else {
        res.json({
          success: 403,
          error: "No user found",
        });
      }
    } catch (error) {
      res.json({
        success: 403,
        error: "Username and password are invalid",
      });
    }
  },

  find_all: (req, res, next) => {
    try {
      AuthService.find_all().then((result) => {
        if (result) {
          res.status(200).json({
            data: result,
            msg: "data found",
          });
        } else {
          res.json({
            sucess: 400,
            message: "Data Not Found",
          });
        }
      });
    } catch (err) {
      res.json({
        sucess: 400,
        message: "Please provide correct information",
      });
    }
  },

  find_by_id: (req, res, next) => {
    const { _id } = req.body;
    try {
      AuthService.find_by_id(_id).then((result) => {
        if (result) {
          res.status(200).json({
            success: 200,
            data: result,
            msg: "User found",
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

  find_and_update: (req, res) => {
    const { _id } = req.body;
    try {
      var data = {
        username: req.body.username,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        role: req.body.role,
        userStatus: req.body.userStatus,
        organization: req.body.organization,
      };
      AuthService.find_and_update(_id, data).then((result) => {
        if (result) {
          res.json({
            success: 200,
            message: "User Updated succefully",
          });
        } else {
          res.json({
            success: 400,
            message: "Please provide correct",
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
  find_by_id_update: (req, res) => {
    const { _id } = req.body;
    const { password } = req.body;
    bcrypt.hash(password, 10, (error, hash) => {
      if (error) {
        res.status(500).json({
          msg: "internal Server Error Create",
        });
      } else {
        try {
          var data = {
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            role: req.body.role,
            userStatus: req.body.userStatus,
            password: hash,
            organization: req.body.organization,
          };
          AuthService.find_and_update(_id, data).then((result) => {
            if (result) {
              res.json({
                success: 200,
                message: "User Updated succefully",
              });
            } else {
              res.json({
                success: 400,
                message: "Please provide correct",
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
      }
    });
  },

  find_and_delete: (req, res) => {
    const { _id } = req.body;
    try {
      AuthService.find_and_delete(_id).then((result) => {
        if (result) {
          res.status(200).json({
            data: result,
            msg: "User deleted",
          });
        } else {
          res.json({
            error: 400,
            message: "User Not Found",
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
};
