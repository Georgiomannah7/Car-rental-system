const Sequelize = require('sequelize');
const sequelize= new Sequelize('car-rental-system','root','Rmacr771088460',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;