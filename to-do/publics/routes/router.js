const router = require('express').Router()
const schema = require('../models/todo')

router.get('/',async (req,res)=>{

    const alltodo = await schema.find()
    res.render('index', {todos : alltodo})
})

module.exports= router;