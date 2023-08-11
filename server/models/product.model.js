// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "This product needs a title"],
        minlength: [3, "This title length must be at least 3 chracters"]
    },
    price:{
        type: Number,
        required: [true, "This product needs a price"],
    },
    description: {
        type: String,
        required: [true, "This product needs a description"],
        minlength: [10, "The description must be at least 10 characters"],
        maxlength: [255, "Description length must not exceed 255 characters"]
    }

    

}, {timestamp: true}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product