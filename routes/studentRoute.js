const express = require("express")
const { getStudent, createStudent, deleteStudent } = require("../controllers/studentController")
const router = express.Router()



//getall student list
router.get("/getall",getStudent)

router.post("/create",createStudent)

router.delete("/delete/:id",deleteStudent)


module.exports = router;