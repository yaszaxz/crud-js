const express = require('express')
const controllerPessoa = require('../controllers/pessoa')

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.get('/listar', controllerPessoa.GetPessoas)
router.post('/criar', controllerPessoa.CreatePessoa)
router.put('/:id', controllerPessoa.UpdatePessoa)
router.delete('/:id', controllerPessoa.DeletePessoa)

// Exportar as rotas
module.exports = router