import { model, Schema } from "mongoose"

//schema
interface Product{
    name:string,
    price:number,
    description:string
}
const productSchema = new Schema<Product>({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }
},{
    timestamps:true
})
//model
export const Product=model('Product' , productSchema)