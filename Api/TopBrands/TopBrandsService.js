const brandModal =require('./TopBrandsModel');
module.exports={
create:(data)=>{
    return brandModal.create(data)
},
find_by_id:(_id)=>{
    return  brandModal.find({_id})
},
find_all:()=>{
    return brandModal.find()
},
find_and_update:(_id,data)=>{
    return brandModal.findOneAndUpdate({_id},data)
    },
find_and_delete:(_id)=>{
    return brandModal.findByIdAndRemove({_id})
}
}