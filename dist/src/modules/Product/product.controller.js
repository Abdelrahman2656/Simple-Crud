"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.addProduct = void 0;
const Database_1 = require("../../../Database");
//add product
const addProduct = async (req, res) => {
    await Database_1.Product.insertMany(req.body);
    res.redirect('/');
};
exports.addProduct = addProduct;
//delete
const deleteProduct = async (req, res) => {
    await Database_1.Product.findByIdAndDelete(req.body.id);
    res.redirect('/');
};
exports.deleteProduct = deleteProduct;
//update 
const updateProduct = async (req, res) => {
    let { id, name, price, description } = req.body;
    // Log the incoming request body to check if id is received
    console.log("Received data:", req.body); // Add this for debugging
    // Find the product by its ID and update its details
    await Database_1.Product.findByIdAndUpdate(id, { name, price, description });
    res.redirect('/');
};
exports.updateProduct = updateProduct;
