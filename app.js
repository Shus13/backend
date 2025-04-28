const express = require("express")
const app = express()

require("./database/connection")

// let app = require("express")()


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



app.get("/books",function(req,res) {
    // logic to fetch books from database
    res.json ({
        message: "Book fetched successfully"
    })
})

app.post("/books", function(req,res) {
    // logic to add book to database goes here...
    res.json ({
        message : "Book added successfully"
    })
})

app.delete("/books/:id", function(req,res){
    // logic to delete book
    res.json({
        message : "Book added successfully"
    })
})

app.patch("/books/:id", function(req,res){
    // logic to update book
    res.json({
        message : "Book updated successfully"
    })
})


postgresql://postgres.bcvvahchzmzecehwmhad:@sushit3061@@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(4000,function() {
    console.log ("Project /backend has started at port 4000")
})