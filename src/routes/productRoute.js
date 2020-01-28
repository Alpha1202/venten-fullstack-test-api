import express from 'express';
import ProductController from '../controllers/productController';


import FindProducts from '../middleware/findProducts';
import { multerUploads } from '../helpers/multerConfig';



const router = express.Router();


const { findAllProducts } = FindProducts
const { getAllProducts, getProduct, addNewProduct } = ProductController;

router.get('/products', findAllProducts, getAllProducts)
router.get('/products/:id', findAllProducts, getProduct)
router.post('/addproduct', multerUploads, addNewProduct)

export default router;
