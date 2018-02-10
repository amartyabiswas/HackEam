let express = require('express');
let router = express.Router();
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
const path = require('path');
let admission=require('../models/Admission');

router.post('/form', function(req, res, next) {
    let obj={
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        enrollment:req.body.enrollment,
        father: req.body.father,
        mother: req.body.mother,
        mobile: req.body.mobile,
        phone: req.body.phone,
        job:req.body.job,
        work:req.body.work,
        location: req.body.location,
        locality: req.body.locality,
        background: req.body.background,
        siblings: req.body.siblings,
        health: req.body.health,
        aadhar: req.body.aadhar,
        remarks: req.body.remarks,
        profile: req.body.profile,
        members:req.body.members
    };

    let newUser=new admission(obj);
    newUser.save(obj);

    res.redirect('/admissionPage_admin');
});

router.get('/alladmissions', function(req, res){
    res.render('alladmissions_admin.ejs')
});

module.exports = router;