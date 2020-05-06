'use strict'

import { Router } from 'express';
const router = Router();
import { post, put, del, get, getBySlug, getById, getByTag } from '../controllers/product-controller';

router.post('/', post);
router.get('/', get);
router.get('/:slug', getBySlug);
router.get('/admin/:id', getById);
router.get('/tags/:tag', getByTag);
router.put('/:id', put);
router.delete('/:id', del);

export default router;