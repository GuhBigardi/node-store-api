'use strict'

import Product from '../models/product';
import ValidationContract from '../validators/validator-contract';
import { getAll } from '../repositories/product-repository';

export function get(req, res, next) {
    getAll()
        .then(data => {
            res.status(200).send(data)
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao listar produto',
                data: ex
            });
        });

}

export function getByTag(req, res, next) {
    Product.find({
        tags: req.params.tag
    })
        .then(data => {
            res.status(200).send(data)
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao consultar produto',
                data: ex
            });
        });

}

export function getBySlug(req, res, next) {
    Product.findOne({
        slug: req.params.slug,
        active: true
    }, 'title price slug description tags')
        .then(data => {
            res.status(200).send(data)
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao consultar produto',
                data: ex
            });
        });
}


export function getById(req, res, next) {
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data)
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao consultar produto',
                data: ex
            });
        });
}
export function post(req, res, next) {

    let contract = new ValidationContract();

    contract.isRequired(req.body.title, 'O titulo do produto é obrigatório');
    contract.isRequired(req.body.description, 'A descrição do produto é obrigatório');
    contract.hasMinLen(req.body.description, 5, 'A descrição do produto deve conter no minimo 5 caracteres');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors());
        return;
    }
    // let product = new Product(req.body);

    // product.save()
    //     .then(x => {
    res.status(201).send({
        message: 'Produto cadastrado com sucesso!'
    });
    //     }).catch(ex => {
    //         res.status(400).send({
    //             message: 'Falha ao cadastrar o produto',
    //             data: ex
    //         });
    //     });
}

export function put(req, res, next) {
    const id = req.params.id;

    Product
        .findByIdAndUpdate(id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: ex
            });
        })
}

export function del(req, res, next) {
    Product
        .findByIdAndRemove(req.params.id, {
        }).then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso!'
            });
        }).catch(ex => {
            res.status(400).send({
                message: 'Falha ao remover produto',
                data: ex
            });
        })
}