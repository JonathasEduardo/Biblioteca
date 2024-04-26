const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');
const LivroController = require('../controllers/LivroController');

router.post('/novacategoria', CategoriaController.novaCategoria);
router.get('/categorias', CategoriaController.listarCategoria);
router.get('/categoria/:id', CategoriaController.listarUmaCategoria);
router.put('/categoria/:id', CategoriaController.atualizarCategoria);
router.delete('/categoria/delete/:id', CategoriaController.removerCategoria);

router.post('/novolivro', LivroController.novoLivro);
router.get('/livros',LivroController.listarLivro);
router.get('/livro/:id',LivroController.listarUmLivro);
router.put('/livro/:id', LivroController.atualizarLivro);
router.delete('/livro/delete/:id', LivroController.removerLivro);

module.exports = router;