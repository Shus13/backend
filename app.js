const express = require("express")
const { books } = require("./database/connection")

const app = express()

require("./database/connection")
app.use(express.json())
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



app.get("/books",async function(req,res) {
    // logic to fetch books from database
    const datas = await books.findAll()
    res.json ({
        message: "Book fetched successfully",
        datas
    })
})

app.post("/books",async function(req,res) {
    // logic to add book to database goes here...
    console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice

    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre

    })
    // console.log(bookName)
    // console.log(bookPrice)
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