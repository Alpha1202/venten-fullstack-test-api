import express from 'express';
import productRoute from './productRoute';

const router = express.Router();

router.use('/api/v1', productRoute);

export default router;