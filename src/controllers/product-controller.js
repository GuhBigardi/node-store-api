'use strict'

import Product from '../models/product';

export function post(req, res, next) {
    let product = new Product(req.body);

    product.save()
    .then(x => {
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }).catch(ex => {
        res.status(400).send({
            message: 'Falha ao cadastrar o produto',
            data: ex
        });
    });
}

export function put(req, res, next) {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
}

export function del(req, res, next) {
    res.status(200).send(req.body);
}