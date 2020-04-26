'use strict'

import { Router } from 'express';
import { buyCar } from '../controllers/car-controller';
const router = Router();

router.post('/buy', buyCar)

export default router;