
const mongoose =require('mongoose')
// mongoose.set('useFindAndModify', false);
require('dotenv').config()
module.exports = function(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        auth: {
            "username":"hindustan",
            "password":"hindustan123",  
          },
    })
    mongoose.connection.on('connected',()=>{
        console.log("Database is connected ")
    })
}




