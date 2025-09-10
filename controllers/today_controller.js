const today = require("../models/today_model");
const bcrypt = require("bcrypt");
const salt = 10;
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utilities/config");
const { Sendmail } = require("../utilities/nodemailer");

const todayuser = async (req, res) => {
  try {
    const { Name, Email, Password, City, Gender, ContactNo, Birthdate} =
      req.body;
    const hashedPassword = await bcrypt.hash(Password, salt);
    const user = new today({
      Name,
      Email,
      Password: hashedPassword,
      City,
      Birthdate,
      ContactNo,  
      Gender,
    });
    await user.save();

    await Sendmail(
      Email,
      "Welcome to our website",
      "<a href='https://google.com'>Google</a>"
    );
    console.log("Success");
    res.status(200).json({
      status: true,
      data: { message: "User created successfully", data: user },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const updateduser = async (req, res) => {
  try {
    const userid = req.params.id;
    const { name, email, password, city } = req.body;
    console.log(userid);
    const user = await today.findByIdAndUpdate(
      userid,
      { name, email, password, city },
      { new: true }
    );
    const updateduser = await user.save();
    res.status(200).json({
      status: true,
      data: { message: "User updated successfully", data: updateduser },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    const user = await today.findOne({ Email: email });
    // console.log(password);
    if (!user) {
      return res
        .status(404)
        .json({ status: false, data: { message: "User not found" } });
    }
    const isMatch = await bcrypt.compare(password, user.Password);
    // console.log(isMatch);
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: false, data: { message: "Invalid password" } });
    }

    const token = await jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    
    res.status(200).json({
      status: true,
      data: { message: "Login success", data: user, token: token },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      data: { message: "Internal server error", data: error },
    });
  }
};

const authverify = async(req,res) => {
  return res.status(200).json({
    status: true,
    data: { message: "User is authenticated", data: req.user },
  });
} 

module.exports = { todayuser, updateduser, login, authverify };
