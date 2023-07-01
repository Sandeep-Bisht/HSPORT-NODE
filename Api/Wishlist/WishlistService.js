const WishlistModal =require('./WishlistModal');
module.exports={
create:(data)=>{
    return WishlistModal.create(data)
},
find_by_id:(userId)=>{
    return  WishlistModal.find({userId}).populate("productId")
},
find_and_update:(_id,userid,order)=>{
return WishlistModal.findOneAndUpdate({_id},{userid,order})
},
find_and_delete:(_id)=>{
    return WishlistModal.findByIdAndRemove({_id})
}
}