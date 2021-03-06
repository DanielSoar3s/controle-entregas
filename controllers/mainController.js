const User = require('../models/User')
const Pedido = require('../models/Pedido')


exports.home = async function(req, res) {
    const pedido = new Pedido();


    const totais = {
        cadastrados: {
            geral: await pedido.countTotal(), 
            mes: 10
        },
        entregues: {
            geral:  await pedido.countTotal({status: 1}),
            mes: 321
        },
        naoEntregues: {
            geral: 2313,
            mes: 55
        }
    }

    
    console.log(totais);
    res.render('pages/home', {totais})
}

exports.cadastrar_pedidos = function(req, res) {
    res.render('pages/cadastrar-pedidos')
}

exports.pedido = function(req, res) {
    const {id} = req.params;
    res.render('pages/itens-pedidos', {id})
}

exports.area_pedidos = function(req, res) {
    res.render('pages/area-pedidos')
}

exports.signin = function(req, res) {
    res.render('pages/signin', { layout: 'pages/signin' })
}

exports.signup = function(req, res) {
    res.render('pages/signup', { layout: 'pages/signup' })
}

exports.save = function(req, res) {
    // console.log(req.body);
    let user = new User(req.body)
    user.create()
    res.render('pages/home')
}

exports.reset = function(req, res) {
    res.render('pages/forgot-pass', { layout: 'pages/forgot-pass' })
}