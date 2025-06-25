const express = require('express');
const router = express.Router();
const {productcategory, updatecategory, getcategory } = require("../controllers/cate_controller");


router.post('/productcategory', productcategory);
router.put('/updatecategory/:id', updatecategory);
router.get('/getcategory', getcategory);



module.exports = router;



