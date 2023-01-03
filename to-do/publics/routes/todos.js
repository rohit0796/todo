const router = require('express').Router()
const schema = require('../models/todo')
router.post("/add/todo",(req,res)=>{
    const {todo,dates} = req.body;
const newTodo = new schema({todo,dates});

newTodo.save()
.then(()=>{
    console.log("successfully added ")
    res.redirect('/');
})
.catch((err)=>{
    console.log(err);
})

}).get('/delete/todo/:_id',(req,res)=>{
   
    const {_id} = req.params;
    schema.deleteOne({_id})
    .then(()=>{
        console.log("successfully deleted")
        res.redirect('/');
    }) 
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;