const express = require("express")
const { getStudent, createStudent } = require("../controllers/studentController")
const router = express.Router()



//getall student list
router.get("/getall",getStudent)

router.post("/create",createStudent)


module.exports = router;