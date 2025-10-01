const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/ProdutoController');

// Criar produto
router.post('/create', produtoController.createProduto);
// Buscar produto por ID
router.get('/buscar/:id', produtoController.produtoFindById);
// Listar todos os produtos
router.get('/', produtoController.produtoFindAll);

module.exports = router;
