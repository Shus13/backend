const express = require("express")
const { fetchBooks, addBooks, deleteBooks, editBooks, } = require("./database/connection")

require("./routes/bookRoute")

const app = express()

require("./database/connection")
app.use(express.json())
// let app = require("express")()

app.use("",bookRoute)

app.get("/books",fetchBooks)
app.post("/books",addBooks)
app.delete("/books/:id",deleteBooks)
app.patch("/books/:id",editBooks)


postgresql://postgres.bcvvahchzmzecehwmhad:@sushit3061@@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

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