import { Router } from "express";
import { addProduct, deleteProduct, updateProduct } from "./product.controller";

const productRouter=Router()
//add product 
productRouter.post('/add-product',addProduct)
//delete product 
productRouter.post('/delete-product',deleteProduct)
//update product
productRouter.post('/update-product',updateProduct )
export default productRouter