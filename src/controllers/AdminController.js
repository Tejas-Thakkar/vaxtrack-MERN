const bcrypt = require("bcrypt");
const userModel = require("../models/UserModel");
const mailUtil = require("../utils/MailUtils");
const adminModel = require("../models/AdminModel")

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@vaxtrack.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

const adminSignup = async (req, res) => {
  try {
    if (req.body.email !== ADMIN_EMAIL) {
      return res.status(403).json({ message: "Unauthorized to create admin" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, salt);

    const adminData = {
      ...req.body,
      password: hashedPassword,
      role: "admin",
    };

    const createdAdmin = await adminModel.create(adminData);
    await mailUtil.sendingMail(createdAdmin.email, "Welcome Admin", "You are registered as admin.");

    res.status(201).json({
      message: "Admin account created successfully",
      data: createdAdmin,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL) {
    return res.status(403).json({ message: "Access denied" });
  }

  const foundAdmin = await adminModel.findOne({ email:email }).populate("roleId");

  if (!foundAdmin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  const isMatch = bcrypt.compareSync(password, foundAdmin.password);
  if (isMatch) {
    return res.status(200).json({
      message: "Admin login successful",
      data: foundAdmin,
    });
  } else {
    return res.status(401).json({
      message: "Invalid password",
    });
  }
};

const getAllUsers = async (req, res) => {
    const users = await userModel.find().populate("roleId")
    res.json({
        message: "user fetched",
        data: users
    })
}

module.exports = { adminSignup, adminLogin, getAllUsers};
