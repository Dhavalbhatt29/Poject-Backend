const catemodel = require("../models/product_module");

const productcategory = async (req, res) => {
  try {
    const { cateid, name, cate } = req.body;

    const category = new catemodel({
      cateid: cateid,
      name: name,
      category: category,
    });

    await cate.save();

    res.status(200).json({
      status: true,
      data: { message: "Product created successfully", data: category },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const updatecategory = async (req, res) => {
  try {
    const categoryid = req.params.id;
    const { cateid, name, cate } = req.body;

    const category = await category.findByIdAndUpdate(
      cateid,
      { cateid, name , cate},
      { new: true }
    );
    const updateduser = await catemodel.save();
    res.status(200).json({
      status: true,
      data: { message: "product updated successfully", data: updateduser },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const getcategory = async(req, res) => {
    try{
      const category = await catemodel.find();
        res.status(200).json({ status: true, data: { message: "Products retrieved successfully", data: category }, });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: false,
            data: { message: "Internal server error", data: error },
          });
    }
}



module.exports = { productcategory, updatecategory, getcategory };
