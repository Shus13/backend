// Books -> Book name, Book Price, Book Author, Book Genra

const { DataTypes } = require("sequelize");

const bookMOdel = (sequelize, DataTypes)=>{
    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor : {
            type : DataTypes.STRING
        },
        bookGenre : {
            type : DataTypes.STRING
        }
    })
    return Book
}
module.exports = bookMOdel