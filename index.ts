import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path, { join, resolve } from 'path';
import { Product } from './Database';
import { dbconnection } from './Database/dbconnection';
import productRouter from './src/modules/Product/product.routes';

const app = express();
const port = 3000;
dotenv.config({ path: path.resolve("./config/.env") });
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: '*', 
}));
//parse
app.use(express.json())
// Serve static files from the 'public' directory
app.use('/public', express.static(join(resolve(), 'public')));
app.set("view engine", "ejs");
// Establish database connection
dbconnection()
//product
app.use(productRouter)
// Route to serve index.html
app.get('/', async(req: Request, res: Response) => {
  let title:string = 'Crud Product'
  let Products = await Product.find()
  
  res.render('index',{title ,Products })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

