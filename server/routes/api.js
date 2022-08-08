const express = require("express");
const router = express.Router();
const car = require("./car");
const reservation = require("./reservation");
const user = require("./user");
const utils = require("./utils");
const auth = require("../middleware/auth")

router.use("/car", auth, car);
router.use("/reservation", auth, reservation);
router.use("/user", auth, user);
router.use("/utils", auth, utils);

module.exports = router;
