"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const dbconnection_1 = require("./Database/dbconnection");
const product_routes_1 = __importDefault(require("./src/modules/Product/product.routes"));
const Database_1 = require("./Database");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
//parse
app.use(express_1.default.json());
// Serve static files from the 'public' directory
app.use('/public', express_1.default.static((0, path_1.join)((0, path_1.resolve)(), 'public')));
app.set("view engine", "ejs");
// Establish database connection
(0, dbconnection_1.dbconnection)();
//product
app.use(product_routes_1.default);
// Route to serve index.html
app.get('/', async (req, res) => {
    let title = 'Crud Product';
    let Products = await Database_1.Product.find();
    res.render('index', { title, Products });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
