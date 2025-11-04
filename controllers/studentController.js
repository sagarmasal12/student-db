// const db = require("../config/db")

// const getStudent = async (req,res) =>{
//     try {
//         const data = await db.query('SELECT * FROM studentdata')
//         if(!data){
//            return res.status(401).send({
//                 success:false,
//                 message:"data not found in db",
//                 error
//             })
//         }
//         res.status(200).send({
//             success:true,
//             message:"Student Data Found successfully..",
//             data:data[0],
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:"false",
//             message:"Student Data Not Found",
            
//         })
//     }
// }
// const getCourse = async (req,res) =>{
//     try {
//         const data = await db.query('SELECT * FROM courses')
//         if(!data){
//            return res.status(401).send({
//                 success:false,
//                 message:"data not found in db",
//                 error
//             })
//         }
//         res.status(200).send({
//             success:true,
//             message:"Student Data Found successfully..",
//             data:data[0],
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:"false",
//             message:"Student Data Not Found",
            
//         })
//     }
// }


// const createStudent = async(req,res)=>{
//     try {
//         const {roll_no,first_name,last_name,email,fees} = req.body

        
//          if(!roll_no || !first_name || !last_name || !email || !fees){
//             return res.status(400).send({
//                 success:false,
//                 message:"Please provide all data"
//             });
//         }

//         const data =await db.query("INSERT INTO studentdata(roll_no,first_name,last_name,email,fees) VALUES (?,?,?,?,?)",[roll_no,first_name,last_name,email,fees]);
//         if(!data){
//           return  res.status(400).send({
//                 success:false,
//                 message:"Provide all data",
//             })
//         }

//         res.status(200).send({
//             success:true,
//             message:"Inserted New Query Successfully"
//         })
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:"student not created or something went to wrong"
//         })
//     }
// }

// const deleteStudent =async (req,res)=>{
//     try {
//         const studentId = req.params.id;
//         if(!studentId){
//             return res.status(404).send({
//                 success:false,
//                 message:"Id not provide pls provide id or Invalid Data"

//             })
//         }
        
//         await db.query('DELETE FROM studentdata WHERE student_id=?',[studentId])
//         res.status(200).send({
//             success:true,
//             message:"Student Delete Successfully.."
//         })
        
//     } catch (error) {
//         console.log(error),
//         res.status(500).send({
//             success:false,
//             message:"Data Not Found For Deleted"
//         })
//     }
// }

// module.exports = {getStudent,createStudent,deleteStudent,getCourse}