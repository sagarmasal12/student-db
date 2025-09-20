const db = require("../config/db")

const getStudent = async (req,res) =>{
    try {
        const data = await db.query('SELECT * FROM studentdata')
        if(!data){
           return res.status(401).send({
                success:false,
                message:"data not found in db",
                error
            })
        }
        res.status(200).send({
            success:true,
            message:"Student Data Found successfully..",
            data:data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:"false",
            message:"Student Data Not Found",
            
        })
    }
}

const createStudent = async(req,res)=>{
    try {
        const {roll_no,first_name,last_name,email,fees} = req.body

        
         if(!roll_no || !first_name || !last_name || !email || !fees){
            return res.status(400).send({
                success:false,
                message:"Please provide all data"
            });
        }

        const data =await db.query("INSERT INTO studentdata(roll_no,first_name,last_name,email,fees) VALUES (?,?,?,?,?)",[roll_no,first_name,last_name,email,fees]);
        if(!data){
          return  res.status(400).send({
                success:false,
                message:"Provide all data",
            })
        }

        res.status(200).send({
            success:true,
            message:"Inserted New Query Successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"student not created or something went to wrong"
        })
    }
}

module.exports = {getStudent,createStudent}