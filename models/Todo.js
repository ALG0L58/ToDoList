const {Schema, model} = require('mongoose')


const Todo = new Schema ({
    title: String || Number,
    completed: {type: Boolean, default: false}
})

module.exports = model("Todo", Todo)