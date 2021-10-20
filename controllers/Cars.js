const Cars =require('../models/Cars');
const Brand= require('../models/Brand');
const Category= require('../models/Category');  
exports.Add = (req,res,next) => {
    res.render('Cars/AddCars', {
        pageTitle:'Add Car',
        editMode: false
    });
}
exports.Update= (req, res, next) => {
    const title = req.body.title;
    Cars.findByPk(title)
    .then( c =>{
        if(!c){
            res.render('Cars/error',{
                pageTitle:'error'
            })
        }
    res.render('Cars/AddCars',{
        pageTitle:'Update Car',
       c :c,
       editMode:true
    })
}
    )
    .catch(err =>{
        console.log(err);
    })
}
exports.deleteCar = (req, res, next) => {
    const title = req.body.title;
    Cars.findByPk(title)
    .then(c=>{
        if(c){
            c.destroy();
            res.redirect('cars')
        }else{
            res.render('Cars/error',{
                pageTitle: "Error"
        })
        }
    })
}
exports.AddCars = (req, res, next) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const nbr = req.body.NbrOfRent;
    const img  = req.body.image;
    const brand = req.body.brand;
    const cat = req.body.category;
    Brand.findByPk(brand)
    .then(result =>{
        if(result){
            Category.findByPk(cat)
            .then(ress =>{
                if(ress){
                    Cars.create({title: title,description: desc,
                         NbrOfRent:nbr , Image: img ,
                          brandName: brand , categoryName: cat});
                    res.redirect('/');
                }else{
                    res.render('Cars/error',{
                        pageTitle: "Error"
                })
            }
            })
     //       .catch(error => console.log(error));
        }else{
            res.render('Cars/error',{
                pageTitle: "Error"
            })
        }
    })
    .catch(err =>console.log(err));
}
exports.showCars = (req, res, next) => {
    const brand = req.body.brand;
    Cars.findAll({where: {brandName: brand}})
    .then(cars =>{
            res.render('Cars/show' , {
            pageTitle: 'Show',
            cars : cars
        })
   

    })}
    exports.afterUpdate = (req, res, next)=>{
        const tit = req.params.tit;
        const title = req.body.title;
        const desc = req.body.desc;
        const nbr = req.body.NbrOfRent;
        const img  = req.body.image;
        const brand = req.body.brand;
        const cat = req.body.category;
        Cars.findByPk(tit)
        .then(b =>{
            b.title=title;
            b.description=desc;
            b.NbrOfRent=nbr;
            b.Image = img;
            b.brandName=brand;
            b.categoryName = cat;
            return b.save();
        })
        .then(() =>
        res.redirect('/cars'))
        .catch((err) => {
            console.log(err);
        })
    }