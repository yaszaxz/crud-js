const express = require('express')
const controllerPessoa = require('../controllers/pessoa')
const authentication = require("../middleware/auth")
// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.get('/listar', authentication, controllerPessoa.GetPessoas)
router.post('/login', controllerPessoa.Login)
router.post('/criar', controllerPessoa.CreatePessoa)
router.put('/:id', authentication, controllerPessoa.UpdatePessoa)
router.delete('/:id', authentication, controllerPessoa.DeletePessoa)

// Exportar as rotas
module.exports = router