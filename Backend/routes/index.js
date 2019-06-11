var express = require('express');
var router = express.Router();
var productcontroller=require('../Controller/productController');

router.post('/addproducts',productcontroller.addProduct );
router.get('/showproducts',productcontroller.showProduct );
module.exports = router;
