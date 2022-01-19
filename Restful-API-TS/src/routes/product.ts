import express from 'express';
const router = express.Router();
import productController from '../controllers/productController';
import {checkProductData} from '../middleware/validate';

router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProduct)

router.post('/products', checkProductData,productController.addProduct)
router.put('/products/:id', checkProductData, productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)

export default router;