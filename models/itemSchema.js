const { Schema } = require('mongoose')

const itemSchema = new Schema (
    {
        name: {type: String, required: true},
        store: {type: String, required: false},

    },
    {timestamps: true}
)

module.exports = itemSchema    