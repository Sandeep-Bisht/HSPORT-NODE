const subscribedModel=require("./SubscribedModal");

module.exports={
create : (data)=>{
    return subscribedModel.create(data);
},
findByEmail: (email)=>{
    return subscribedModel.findOne({email:email})
}
}