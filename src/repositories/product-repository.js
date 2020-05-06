'use strict'

import Product from '../models/product';

export function getAll() {
    return Product
        .find({
            active: true
        }, 'title price slug')
}