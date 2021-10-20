const Sequelize = require('sequelize');
const sequelize= require('../util/database');
const Rental = sequelize.define('rental',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userFirstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    userLastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    userMobileNumber:{
        type: Sequelize.STRING,
        allowNull: false
    },

})
module.exports=Rental;