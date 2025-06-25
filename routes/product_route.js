const express = require('express');
const router = express.Router();
const {addproduct, getproduct, updatedproduct} = require("../controllers/product_Controller");
// const Auth = require('../middleware/requireauth');


router.post('/addproduct', addproduct);
router.put('/updateproduct/:id/:name', updatedproduct);
router.get('/getproduct', getproduct);



module.exports = router;



