const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    dates:{
        type:Date,
        required:true
    }

})

module.exports = new mongoose.model('Todo',schema);