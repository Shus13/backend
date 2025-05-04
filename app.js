const express = require("express")
const { fetchBooks, addBooks, deleteBooks, editBooks, } = require("./database/connection")

const bookRoute = require("./routes/bookRoute")

// let app = require("express")()
const app = express()
require("./database/connection")
app.use(express.json())

// localhost:4000/api/books 
app.use("/api",bookRoute)



app.listen(4000,function() {
    console.log ("Project /backend has started at port 4000")
})


// app.get("/",(req,res)=>{
//     res.json ({
//         name:"Sushit",
//         address:"Nepalgunj"
//     })
// })

// app.get("/about",(req,res)=>{
//     res.json ({
//         name: "This is about page"
//     })
// })

// app.post("/register",(req,res)=>{
//     res.json ({
//         name: "Registered successfull!!!"
//     })
// })