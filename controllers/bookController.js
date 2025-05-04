
const { where } = require("sequelize")
const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res) {
    // logic to fetch books from database
    const datas = await books.findAll()
    res.json ({
        message: "Book fetched successfully",
        datas
    })
}

exports.addBooks = async function(req,res) {
    // logic to add book to database goes here...
    // console.log(req.body)
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
}


exports.deleteBooks = async function(req,res) {

    const id = req.params.id
    await books.destroy({
        where : {
            id : id
        }
    })
    res.json({
        message : "Book deleted Successfully"
    })
}

exports.editBooks = async function(req,res) {
    const id = req.params.id

    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body

    await books.update({bookName, bookPrice,bookAuthor, bookGenre}, 
        {
            where : {
                id : id
        }
    })

    res.json({
        message : "Book updated successfully"
    })
}

exports.singleFetchBook = async function(req,res) {
    const id = req.params.id
    const datas = await books.findByPk(id)
    const datass = await books.findAll({
        where : {
            id : id
        }
    })
    res.json ({
        message : "single book fetched successfully",
        datas,
        datass
    })
}