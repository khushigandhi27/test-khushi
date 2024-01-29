const express = require('express');

const addBookController = require('../controllers/books/add-books');
const updateBookController = require('../controllers/books/update-books');
const deleteBookController = require('../controllers/books/delete-books');
//const { addBookValidator, updateBookValidator} = require('../validators/book-validators');
const addBookValidator = require('../validators/book-validators/add-book-validator');
const updateBookValidator = require('../validators/book-validators/upd-book-validator');
const deleteBookValidator = require('../validators/book-validators/delete-book-validator');
const validateSchema = require('../validators/validator');

const router = express.Router();

router.post('/add-books',addBookValidator,validateSchema,addBookController);
router.put('/update-books',updateBookValidator,validateSchema,updateBookController);
router.delete('/delete-books',deleteBookValidator,validateSchema,deleteBookController);

module.exports = router;
