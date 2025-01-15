"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const productRouter = (0, express_1.Router)();
//add product 
productRouter.post('/add-product', product_controller_1.addProduct);
//delete product 
productRouter.post('/delete-product', product_controller_1.deleteProduct);
//update product
productRouter.post('/update-product', product_controller_1.updateProduct);
exports.default = productRouter;
