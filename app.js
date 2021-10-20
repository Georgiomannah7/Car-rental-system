const express = require('express');
const bodyParser = require('body-parser');
const error = require('./controllers/error');
const sequelize = require('./util/database');
const app = express();
const CatRoute = require('./routes/Category');
const CarRoute = require('./routes/Cars');
const Brand = require('./models/Brand');
const Cars = require('./models/Cars');
const Category = require('./models/Category');
const Rental = require('./models/Rental');
const BrRoute= require('./routes/Brand');
app.set('view engine', 'ejs');
app.set('views','views');
//app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(CatRoute);
app.use(CarRoute);
app.use(BrRoute);
Cars.belongsTo(Brand,{constraints:true ,onDelete: 'CASCADE'});
Brand.hasMany(Cars);
Cars.belongsTo(Category,{constraints:true ,onDelete: 'CASCADE'});
Category.hasMany(Cars);
Rental.belongsTo(Cars,{constraints:true ,onDelete: 'CASCADE'});
Cars.hasMany(Rental);
app.use(error.getError);
sequelize
.sync()
.then(result=>{
    app.listen(3000);
})
.catch(error=>{
    console.log(error);
})
