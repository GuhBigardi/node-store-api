'use strict'

export function buyCar(req, res, next) {
    if (req.body.car === 'Veloster') {
        res.status(200).send({
            prize: 'Você ganhou R$ 5.000,00 em gasolina'
        });
    }
    else if(req.body.store === 'HVille'){
        res.status(200).send({
            prize: 'Você ganhou R$ 10.000,00 de desconto na sua próxima compra'
        });
    }
    else {
        res.status(200).send({
            prize: 'Você não ganhou nada'
        });
    }
}