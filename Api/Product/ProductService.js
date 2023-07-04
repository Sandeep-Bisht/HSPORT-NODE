const ProductModal =require('./ProductModel');
module.exports={
create:(data)=>{    
    return ProductModal.create(data)
},
find_all:()=>{
    return ProductModal.find().populate("brand").populate("category").populate("subcategory")
},
find_by_id:(_id)=>{
    // console.log("inside find", _id)
    return  ProductModal.find({_id}).populate("brand").populate("category").populate("subcategory")
},
find_and_update:(_id,data)=>{
    return ProductModal.findOneAndUpdate({_id},data)
    },
find_and_delete:(_id)=>{
    return ProductModal.findByIdAndRemove({_id})
},
// update_quantity:(id, quantity)=>{
//     return ProductModal.updateOne({id}, {quantity});
// }
}