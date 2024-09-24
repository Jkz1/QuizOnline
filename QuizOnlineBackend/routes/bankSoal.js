const e = require("express");
const { getAllSoal } = require("../controllers/bankSoal");

const router = e.Router();

router.get("/getAllSoal", getAllSoal);

module.exports = router;