const express = require('express');
const router = express.Router();

// controller
const createProductController = require('@controllers/product/createProduct');
const indexProductController = require('@controllers/product/indexProduct');
const getProductController = require('@controllers/product/getProduct');
const deletedProductController = require('@controllers/product/deletedProduct');
const updateProductController = require('@controllers/product/updateProduct');
const uploadPictureProduct = require('@controllers/product/uploadPictureProduct');

// middleware
const productPagination = require('@middlewares/pagination/productPagination');
const upload = require('@middlewares/upload');
const queryGetProductData = require('@middlewares/queryGetData/queryGetProductData');


router.post('/add/product', createProductController.create);
router.get('/get/product', productPagination.productPagination, indexProductController.index);
router.get('/get/product/:id', queryGetProductData.queryGetProductData, getProductController.get);
router.delete('/delete/product/:id', queryGetProductData.queryGetProductData, deletedProductController.deleted);
router.put('/put/product/:id', queryGetProductData.queryGetProductData, updateProductController.update);
router.post('/upload/product/:id', queryGetProductData.queryGetProductData, upload.productPicture, uploadPictureProduct.upload);

module.exports = router;
