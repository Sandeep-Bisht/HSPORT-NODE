const AuthModal =require('./AuthModel');
module.exports={
create:(data)=>{
    console.log("inisde cretae service", data)
    return AuthModal.create(data)
},
isuser:(data)=>{
    return AuthModal.find(data)
},
find_by_id:(_id)=>{
    return  AuthModal.find({_id})
},
find_all:(data)=>{
    return AuthModal.find(data)
},
find_and_update:(_id,data)=>{
    return AuthModal.findOneAndUpdate({_id},data)
    },
find_and_delete:(_id)=>{
    return AuthModal.findByIdAndRemove({_id})
},
find_by_id_update:(_id,data)=>{
    return AuthModal.findByIdAndUpdate({_id},data)
},
// findOne:(query)=>{
//     return AuthModal.findOne(query);
// }
}