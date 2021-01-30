const express = require('express')
const router = express.Router()
const mainController = require('./controllers/mainController')

// rotas
router.get('/', mainController.home);

router.get('/cadastrar-pedidos', mainController.cadastrar_pedidos)

router.get('/pedido/:id', mainController.pedido)

router.get('/area-pedidos', mainController.area_pedidos)

router.get('/signin', mainController.signin)

router.get('/signup', mainController.signup)
router.post('/register', mainController.save)

router.get('/reset', mainController.reset)

module.exports = router
