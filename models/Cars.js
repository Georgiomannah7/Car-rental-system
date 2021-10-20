const Sequelize = require('sequelize');
const sequelize =require('../util/database');

const Cars= sequelize.define('cars',{
    title: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    description: {
        type: Sequelize.STRING,
        allowNull:false
    },
    NbrOfRent :{
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull:false
    },
    Image: {
        type: Sequelize.STRING,
        allowNull:false
    }
});
module.exports = Cars;