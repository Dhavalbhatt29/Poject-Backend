const productmodel = require("../models/product_module");

const addproduct = async (req, res) => {
  try {
    const { name, description, price , cateid, gid} =
      req.body;
    
    const product = new productmodel({
      name:name,
      description:description,
      cateid:cateid,
      gid:gid,
      price:price
    });

    
    await product.save();

  
    res.status(200).json({
      status: true,
      data: { message: "Product created successfully", data: product },
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const updatedproduct = async (req, res) => {
  try {
    const productid = req.params.id;
    const { name, description,cateid, gid, price } = req.body;
    
    const product = await product.findByIdAndUpdate(
      productid,
      { name, description, cateid, gid, price },
      { new: true }
    );
    const updateduser = await productmodel.save();
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

const getproduct = async(req, res) => {
    try{
      const products = await productmodel.find({
        $and:[
          {
            gid:{$eq : saree}
          }
        ]
      });
        res.status(200).json({ status: true, data: { message: "Products retrieved successfully", data: products }, });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: false,
            data: { message: "Internal server error", data: error },
          });
    }
}




module.exports = { addproduct, updatedproduct, getproduct};
