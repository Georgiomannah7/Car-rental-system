const Sequelize = require('sequelize');
const sequelize=require('../util/database');
const Category = sequelize.define('category', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false,
    },
    description: {
        type: Sequelize.STRING,

    }

});
module.exports= Category;