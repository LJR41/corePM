// 1. import the model
const Product = require("../models/product.model")
// 2. export all the functions with placeholder
module.exports.apiTest = (req, res)=>{
    res.json({message: "Product is Working"})
}

// Example: 
module.exports.newProduct = (req, res)=>{
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err=>res.json(err))
}

module.exports.allProduct = (req, res)=>{
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.viewProduct=(req,res)=>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.editProduct=(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProd => res.json(updatedProd))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}