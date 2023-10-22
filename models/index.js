const mongoose = require('mongoose')

const itemSchema = require('./itemSchema')


const Item = mongoose.model('Item', itemSchema)
const Store = mongoose.model('Store', itemSchema)

//export the model:
module.exports = {
    Item,
    Store
}