
// We are writing here code for database connection 
const {Sequelize,DataTypes,} = require("sequelize")

// const bookMOdel = require("./models/book.model")
// bookMOdel()

// const sequelize = require("sequelize")
// const Sequalize = Sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.bcvvahchzmzecehwmhad:3061sushit3061@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authentication Successfull!!!")
})
.catch((err)=>{
    console.log("Error !!!" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.books = require("./models/book.model")(sequelize, DataTypes)

db.users = require("./models/user.model")(sequelize, DataTypes)

// migrate code

sequelize.sync({force : true}).then(()=>{
    console.log("Migrate vayo!")
});

module.exports = db