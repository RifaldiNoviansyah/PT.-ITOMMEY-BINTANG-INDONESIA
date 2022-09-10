const express = require('express');
const router = express.Router();

const createProductController = require('@controllers/product/createProduct');
const indexProductController = require('@controllers/product/indexProduct');
const getProductController = require('@controllers/product/getProduct');
const deletedProductController = require('@controllers/product/deletedProduct ');
const updateProductController = require('@controllers/product/updateProduct');

router.post('/add/product', createProductController.create);
router.get('/get/product', indexProductController.index);
router.get('/get/product/:id', getProductController.get);
router.delete('/delete/product/:id', deletedProductController.deleted);
router.put('/put/product/:id', updateProductController.update);

module.exports = router;
