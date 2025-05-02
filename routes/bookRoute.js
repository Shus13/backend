const { fetchBooks, addBooks, deleteBooks, editBooks } = require("../controllers/bookController")


const router = require("express").Router


router.route("/books").get(fetchBooks).post(addBooks)
router.route("/books/:id").delete(deleteBooks).patch(editBooks)




module.exports = router