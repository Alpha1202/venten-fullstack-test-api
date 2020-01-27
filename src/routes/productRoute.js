import express from 'express';
import ProductController from '../controllers/productController';
import FindProducts from '../middleware/findProducts';

const router = express.Router();

const { findAllProducts } = FindProducts
const { getAllProducts } = ProductController;

router.get('/products', findAllProducts, getAllProducts)

export default router;