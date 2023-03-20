const express = require("express");
const router = express.Router();

/**
 * @description: Routes
*/
const authRoutes = require("./auth");
const userRoutes = require("./user");
const categoryRoutes = require("./category");
const productRoutes = require("./product");
const orderRoutes = require("./order");
const fileUploadRoutes = require("./fileUpload");
const paymentRoutes = require("./payment");

router.use("/", authRoutes);
router.use("/", authRoutes);
router.use("/", userRoutes);
router.use("/", categoryRoutes);
router.use("/", productRoutes);
router.use("/", orderRoutes);
router.use("/", fileUploadRoutes);
router.use("/", paymentRoutes);

module.exports = router;