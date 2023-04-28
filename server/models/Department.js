const mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image: {
        type: String,
        required: false
    },
    year : {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Department = mongoose.model('Departments',DepartmentSchema)

module.exports = Department