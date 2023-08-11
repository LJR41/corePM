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

