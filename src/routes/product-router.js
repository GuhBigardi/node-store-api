'use strict'

import { Router } from 'express';
const router = Router();
import { post, put, del } from '../controllers/product-controller';

router.post('/', post);
router.put('/:id', put);
router.delete('/', del);

export default router;