const Sequelize = require('sequelize');
const sequelize=require('../util/database');
const Brand = sequelize.define('brand',{
    name: {
        type: Sequelize.STRING,
        allowNull: false ,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING
    },
    showNbrOfCars: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
   
});
module.exports = Brand;