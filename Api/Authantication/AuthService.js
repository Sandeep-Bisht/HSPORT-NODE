const UserModel =require('./AuthModel');
module.exports={
create:(data)=>{
    // console.log("inisde cretae service", data)
    try {
        return UserModel.create(data)
    } catch (error) {
        console.log(error)
    }
    
},
isuser:(data)=>{
    return UserModel.find(data)
},
find_by_id:(_id)=>{
    return  UserModel.find({_id})
},
find_all:(data)=>{
    return UserModel.find(data)
},
find_and_update:(_id,data)=>{
    return UserModel.findOneAndUpdate({_id},data)
    },
find_and_delete:(_id)=>{
    return UserModel.findByIdAndRemove({_id})
},
find_by_id_update:(_id,data)=>{
    return UserModel.findByIdAndUpdate({_id},data)
},
findOne:(data)=>{
    return UserModel.findOne(data);
}
}