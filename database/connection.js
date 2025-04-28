
// We are writing here code for database connection 
const {Sequelize,DataTypes,} = require("sequelize")

// const sequelize = require("sequelize")
// const Sequalize = Sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.bcvvahchzmzecehwmhad:@sushit3061@@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

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

module.exports = db