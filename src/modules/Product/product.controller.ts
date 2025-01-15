import { Request, Response } from "express";
import { Product } from "../../../Database";

//add product
export const addProduct=async(req:Request,res:Response)=>{
    await Product.insertMany(req.body)
    
    res.redirect('/')
    
}

//delete
export const deleteProduct =async(req:Request,res:Response)=>{
await Product.findByIdAndDelete(req.body.id)
res.redirect('/')
}
//update 
export const updateProduct = async (req: Request, res: Response) => {
    let { id, name, price, description } = req.body;

    // Log the incoming request body to check if id is received
    console.log("Received data:", req.body); // Add this for debugging
    

    // Find the product by its ID and update its details
    await Product.findByIdAndUpdate(id, { name, price, description });
  
   res.redirect('/')

 
};