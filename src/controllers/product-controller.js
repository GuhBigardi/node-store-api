'use strict'

export function post(req, res, next) {
    res.status(201).send(req.body);
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