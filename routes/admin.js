let express = require('express');
let router = express.Router();
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
const path = require('path');
let admission=require('../models/Admission');

router.post('/form', function(req, res, next) {

    let newUser=new admission(req.body);
    newUser.save(req.body);

    res.redirect('/admissionPage_admin');
});

router.get('/alladmissions', function(req, res){
    admission.find({}, function (err, data) {
        if(err){
            console.log(err);
        }else{
            //console.log(data);
            res.render('alladmissions_admin.ejs', {data: data});
        }
    });
});

module.exports = router;