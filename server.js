const express = require("express");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

const studentRoutes = require("./routes/studentRoute");

//configuaration dotenv
dotenv.config();

//rest object
const app = express();

app.use(express.json());

app.use("", studentRoutes);
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Node js and MySql</h1>");
});

//port
const PORT = process.env.PORT || 4000;

// conditionally listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("MYSQL DB Connected");

    //listen
    app.listen(PORT, () => {
      console.log(`Server Running on Port:- http://localhost:4208 ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
