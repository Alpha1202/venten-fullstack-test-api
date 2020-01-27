import express from 'express';
import ProductController from '../controllers/productController';
import FindProducts from '../middleware/findProducts';

const router = express.Router();

const { findAllProducts } = FindProducts
const { getAllProducts, getProduct } = ProductController;

router.get('/products', findAllProducts, getAllProducts)
router.get('/products/:id', findAllProducts, getProduct)

export default router;