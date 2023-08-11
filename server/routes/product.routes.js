// 1. import the controller
const ProductController = require("../controllers/product.controller")
// 2. export a function that reads one argument (app)
const routes = (app) =>{
    app.get('/api/testing', ProductController.apiTest)
    app.get('/api/product/all',ProductController.allProduct)
    app.post('/api/product/create', ProductController.newProduct)
}
// 3. include all the routes with the corresponding logic from controller (test)

module.exports = routes